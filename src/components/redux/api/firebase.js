
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
    apiKey: "AIzaSyDSfkpI8lDtFMhPQA0bOLwp6T6Q5sGtaGM",
    authDomain: "dropbox-repo.firebaseapp.com",
    projectId: "dropbox-repo",
    storageBucket: "dropbox-repo.appspot.com",
    messagingSenderId: "940689623703",
    appId: "1:940689623703:web:fd03fe5e0986c4dc0677d2",
    measurementId: "G-X6PZHXCK4X"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app)


export { app, firestore, auth, storage };

