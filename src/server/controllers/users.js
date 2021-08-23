import { admin, db } from '../firebase/admin.js';
import { auth } from '../firebase/fire.js';
// Validations
import { validationLoginData, validationSignupData, validationEmailData } from '../../../utils/validators/validators.js';
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
      email:           ctx.request.body.email || "",
      password:        ctx.request.body.password,
      confirmPassword: ctx.request.body.confirmPassword,
      permissions:     ctx.request.body.permissions || "",
      createdAt:       new Date().toISOString(),
      lastChange:      new Date().toISOString(),
    };

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

    ctx.body = { status: 'ok' };
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
