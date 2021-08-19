import admin from 'firebase-admin';
import serviceAccount from './configs/saaskey.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { admin, db };
