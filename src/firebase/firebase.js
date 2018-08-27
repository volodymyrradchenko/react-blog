import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwfimnbAk2R9Zdw80oKkvKHX1fPgmmTqM",
    authDomain: "react-blog-50011.firebaseapp.com",
    databaseURL: "https://react-blog-50011.firebaseio.com",
    projectId: "react-blog-50011",
    storageBucket: "react-blog-50011.appspot.com",
    messagingSenderId: "561880373121"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
}