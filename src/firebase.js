import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyC2ZaKZC_OfP4D80Rv2NJvnV-VOdn7HH6A",
    authDomain: "fir-1ec4f.firebaseapp.com",
    projectId: "fir-1ec4f",
    storageBucket: "fir-1ec4f.appspot.com",
    messagingSenderId: "291374292150",
    appId: "1:291374292150:web:53a30932c36f517f135a17",
    measurementId: "G-71TCXNJMTM"
});
const auth=firebase.auth();

export {auth};