import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD6UWBDVbMRBtpOYgV_pQSHYEajTX4tpic",
    authDomain: "project-25e48.firebaseapp.com",
    projectId: "project-25e48",
    storageBucket: "project-25e48.appspot.com",
    messagingSenderId: "117142242472",
    appId: "1:117142242472:web:8f791a99a37cef6749ae9d"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }