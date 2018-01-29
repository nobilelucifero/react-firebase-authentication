import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getUser = (uid) =>
  db.ref(`users/`).child(`${uid}`).once('value');

export const getUserByUsername = (username) =>
  // db.ref(`users/`).child(`${name}`).once('value');
  db.ref(`users/`).orderByChild('username').equalTo(username).once('value');

// Other db APIs ...
