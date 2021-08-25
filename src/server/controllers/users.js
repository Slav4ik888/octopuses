import { admin, db } from '../firebase/admin.js';
import { auth } from '../firebase/fire.js';
// Validations
import { validationLoginData, validationSignupData, validationEmailData } from '../../utils/validators/base/validators.js';
// Functions
import sendMail from '../lib/emails/sendMail.js';
import { loggerUser, loggerMail } from '../lib/loggers/index.js';
// Helpers
import { objectFieldsToString } from '../../utils/objects/object-fields-to-string/object-fields-to-string.js';
// Consts
import { SITE_URL, SITE_URL_LOGIN, SITE_TITLE } from '../../consts.js';

console.log('process.env.SITE_URL_LOGIN: ', process.env.SITE_URL_LOGIN);


export async function userSignup(ctx, next) {
  const email = ctx.request.body.email;
  try {
    loggerUser.info(`[userSignup] - start ${email}`);

    const newUser = {
      email,
      firstName:       ctx.request.body.firstName || "",
      secondName:      ctx.request.body.secondName || "",
      middleName:      ctx.request.body.middleName || "",
      mobileNumber:    ctx.request.body.mobileNumber || "",
      location:        ctx.request.body.location,
      email:           ctx.request.body.email || "",
      password:        ctx.request.body.password,
      confirmPassword: ctx.request.body.confirmPassword,
      permissions:     ctx.request.body.permissions || "",
      createdAt:       new Date().toISOString(),
      lastChange:      new Date().toISOString(),
    };

    const { valid, errors } = validationSignupData(newUser);
    if (!valid) {
      loggerUser.error(`[userSignup] - ${newUser.email} - ${objectFieldsToString(errors)}`);
      return res.status(400).json(errors);
    }

    // Проверяем свободен ли email
    let docs = [];
    const docsSnap = await db.collectionGroup(`users`).where(`email`, `==`, newUser.email).get();
    docsSnap.forEach((d) => docs.push(d.data()));

    if (docs.length) {
      ctx.status = 400;
      ctx.body = { email: `Этот email уже занят` };
      return;
    }

    // Создаём нового пользователя
    const userData = await auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
    const userId = userData.user.uid;

    // Получаем токен
    const idToken = await userData.user.getIdToken();

    newUser.userId = userId;
    delete newUser.password;
    delete newUser.confirmPassword;

    await db.collection(`users`).doc(userId).set(newUser);

    const expiresIn = 60 * 60 * 24 * 12 * 1000;
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
    const options = { maxAge: expiresIn, httpOnly: true, path: '/' };
    ctx.cookies.set('session', sessionCookie, options);

    ctx.body = { newUser, message: `Поздравляем с успешной регистрацией!` };
    loggerUser.info(`[userSignup] - ${email} successfully!`);
  }
  catch (err) {
    loggerUser.error(`[userSignup] - ${email - err}`);
    ctx.status = 500;
    ctx.body = { general: `Что-то пошло не так. Мы уже отправили разработчику отчёт об этом... Вскоре, всё починят......` };
  }
}



export async function sendPasswordResetEmail(ctx, next) {
  const email = ctx.request.body.email;

  try {
    loggerMail.info(`[sendPasswordResetEmail] - start sent to ${email}`);
    
    const { valid, errors } = validationEmailData(email);
    if (!valid) {
      loggerMail.error(`[sendPasswordResetEmail] - ${email}: ${objectFieldsToString(errors)}`);
      ctx.status = 400;
      ctx.body = errors;
      return;
    }
    
    // Проверяем есть ли такой пользователь в базе, если нет, то выпадет ошибка
    await admin.auth().getUserByEmail(email);

    const actionCodeSettings = {
      url: process.env.SITE_URL_LOGIN || SITE_URL_LOGIN,
      handleCodeInApp: true,
    };

    const link = await admin.auth().generatePasswordResetLink(email, actionCodeSettings)
     
    if (link) await sendMail({
      to: email,
      subject: `Ссылка для восстановления доступа на платформу - "${SITE_TITLE.full}"`,
      locals: {
        name: ``,
        url_course: process.env.SITE_URL || SITE_URL,
        url_link: link
      },
      template: 'password-reset-link',
    });
    
    loggerMail.info(`[sendPasswordResetEmail] - ${email} successfully!`);
    ctx.status = 200;
    ctx.body = { message: `Ссылка для восстановления пароля отправлена на почту: ${email}` };
  }
  catch (err) {
    switch (err.code) {
      case `auth/user-not-found`:
        loggerMail.error(`[sendPasswordResetEmail] - ${email}: не зарегистирован`);
        ctx.status = 403;
        ctx.body = { general: `${email} не зарегистирован` };
        break;
      
      default:
        loggerMail.error(`[sendPasswordResetEmail] - ${email}: ${err}`);
        ctx.status = 500;
        ctx.body = { general: `Что-то пошло не так. Мы уже отправили разработчику отчёт об этом... Вскоре, всё починят......` };
    }
  }
}
  

export async function userLogin(ctx, next) {
  const user = {
    email: ctx.request?.body?.userData?.email,
    password: ctx.request?.body?.userData?.password
  };

  console.log('user: ', user);
  loggerUser.info(`[userLogin] - ${user.email}...`);
  
  try {
    const { valid, errors } = validationLoginData(user);
    if (!valid) {
      loggerUser.error(`[userLogin] - ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = errors; return;
    }
    
    // Проверяем является ли пользователь удалённым (отключенным)
    const userRecord = await admin.auth().getUserByEmail(user.email);
    if (userRecord.disabled) {
      loggerUser.error(`[userLogin] - Данный аккаунт отключен. Обратитесь в службу технической поддержки.`);
      ctx.status = 403;
      ctx.body = { general: `Данный аккаунт отключен. Обратитесь в службу технической поддержки.` };
      return;
    }

    const userData = await auth.signInWithEmailAndPassword(user.email, user.password);
    const idToken = await userData.user.getIdToken();


    const csrfToken = ctx.request.body.csrfToken ? ctx.request.body.csrfToken.toString() : ``;

    // Guard against CSRF attacks.
    if (ctx.request?.cookies && csrfToken) {
      if (csrfToken !== ctx.request.cookies.csrfToken) {
        loggerUser.error(`[userLogin] - [${user.email}] - Guard against CSRF attacks`);
        ctx.status = 401; ctx.body = { general: 'UNAUTHORIZED REQUEST!' };return;
      }
    }

    // Set session expiration to 12 days.
    const expiresIn = 60 * 60 * 24 * 12 * 1000;

    // Create the session cookie. This will also verify the ID token in the process.
    // The session cookie will have the same claims as the ID token.
    // To only allow session cookie setting on recent sign-in, auth_time in ID token
    // can be checked to ensure user was recently signed in before creating a session cookie.
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    // Set cookie policy for session cookie.
    // ADD secure: true, когда будет https
    const options = { maxAge: expiresIn, httpOnly: true, path: '/' };
    ctx.cookies.set('session', sessionCookie, options);
    ctx.body = { status: 'success' };

    loggerUser.info(`[userLogin] - ${user.email} вошёл :)`);
    return;
  }
  catch (err) {
      switch (err.code) {
        case `auth/user-not-found`:
          loggerUser.error(`[userLogin] - [${user.email}] - Пользователь с таким email не найден...`);
          ctx.status = 403;
          ctx.body = { email: `Пользователь с таким email не найден` };
          return;
        
        case `auth/wrong-password`:
          loggerUser.error(`[userLogin] - [${user.email}] - Не верный пароль...`);
          rctx.status = 403;
          ctx.body = { password: `Не верный пароль, попробуйте ещё раз` };
          return;
          
        default:
          loggerUser.error(`[userLogin] - [${user.email}] - ${err}`);
          ctx.status = 500;
          ctx.body = { general: `Что-то пошло не так. Мы уже отправили разработчику отчёт об этом... Вскоре, всё починят......` };
      }
  }
}

// TESTING

export async function hello(ctx, next) {
  console.log(`function hello!`);
  // console.log('ctx.path: ', ctx.path); // /api/hello

  ctx.status = 200;
  ctx.body = `Hello unauthorized user!`;
}

export async function helloById(ctx, next) {
  console.log(`function helloById!`);

  const { id } = ctx.params;
  console.log('id: ', id);

  ctx.status = 200;
  ctx.body = `Hello unauthorized user with Id: ${id}`;
}
