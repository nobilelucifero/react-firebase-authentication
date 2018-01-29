import * as firebase from 'firebase';

const REACT_APP_YOUR_API_KEY="AIzaSyCMmg1YlJEpcvkE7sFJ4C0ebOH6tVlYk-Y"
const REACT_APP_YOUR_AUTH_DOMAIN="alsofyi-42ef8.firebaseapp.com"
const REACT_APP_YOUR_DATABASE_URL="https://alsofyi-42ef8.firebaseio.com"
const REACT_APP_YOUR_PROJECT_ID="alsofyi-42ef8"
const REACT_APP_YOUR_STORAGE_BUCKET="alsofyi-42ef8.appspot.com"
const REACT_APP_YOUR_MESSAGING_SENDER_ID="893535959878"

const prodConfig = {
  apiKey: REACT_APP_YOUR_API_KEY,
  authDomain: REACT_APP_YOUR_AUTH_DOMAIN,
  databaseURL: REACT_APP_YOUR_DATABASE_URL,
  projectId: REACT_APP_YOUR_PROJECT_ID,
  storageBucket: REACT_APP_YOUR_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_YOUR_MESSAGING_SENDER_ID,
};

const devConfig = {
  apiKey: REACT_APP_YOUR_API_KEY,
  authDomain: REACT_APP_YOUR_AUTH_DOMAIN,
  databaseURL: REACT_APP_YOUR_DATABASE_URL,
  projectId: REACT_APP_YOUR_PROJECT_ID,
  storageBucket: REACT_APP_YOUR_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_YOUR_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
