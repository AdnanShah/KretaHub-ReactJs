import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyDq77roSfjkZag9c_ln30dUfHDQLUZ5lzs',
    authDomain: 'fir-514e2.firebaseapp.com',
    databaseURL: 'https://fir-514e2.firebaseio.com',
    projectId: 'fir-514e2',
    storageBucket: 'fir-514e2.appspot.com',
    messagingSenderId: '575018797981'
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
    auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};