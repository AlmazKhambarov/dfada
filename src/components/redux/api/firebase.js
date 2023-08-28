
// import { initializeApp } from "firebase/app";
// import { getAuth, updateProfile } from "firebase/auth";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBi1JD1D28wMk_Hzja5I1clR0UgSa--VLI",
//     authDomain: "dropbox-7aug.firebaseapp.com",
//     projectId: "dropbox-7aug",
//     storageBucket: "dropbox-7aug.appspot.com",
//     messagingSenderId: "606667982566",
//     appId: "1:606667982566:web:79223c2f55c947c23e5d27",
//     measurementId: "G-17NN3Z2SFF"
// };


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const firestore = getFirestore(app);
// import "firebase/firestore";
// import firebase, { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBi1JD1D28wMk_Hzja5I1clR0UgSa--VLI",
//     authDomain: "dropbox-7aug.firebaseapp.com",
//     projectId: "dropbox-7aug",
//     storageBucket: "dropbox-7aug.appspot.com",
//     messagingSenderId: "606667982566",
//     appId: "1:606667982566:web:79223c2f55c947c23e5d27",
//     measurementId: "G-17NN3Z2SFF"
// };

// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
// export default firebaseConfig;


import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

//  Update the config
const firebaseConfig = {
    apiKey: "AIzaSyDu8DhsQLEpZlwjl4OKhfuYzpP35Ujsyzs",
    authDomain: "erseitov-dropbox.firebaseapp.com",
    projectId: "erseitov-dropbox",
    storageBucket: "erseitov-dropbox.appspot.com",
    messagingSenderId: "281467543435",
    appId: "1:281467543435:web:0ed3878b7c4a5bacc9998e",
    measurementId: "G-C1R6P2WGQH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app)


export { app, firestore, auth, storage };

