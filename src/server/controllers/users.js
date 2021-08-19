import { admin, db } from '../firebase/admin.js';
import { auth } from '../firebase/fire.js';


export async function userSignup(ctx, next) {
  try {
    const newUser = {
      email:           ctx.request.body.email,
      name:            ctx.request.body.name || "",
      secondName:      ctx.request.body.secondName || "",
      lastName:        ctx.request.body.lastName || "",
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
  }
  catch (e) {
    console.log(e);
  }
}


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
