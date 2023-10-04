import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore, storage } from "./api/firebase";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import User from "../User/User";

export const Registration = createAsyncThunk(
    "user/createUserAndProfile",
    async (data, thunkAPI) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(auth.currentUser, { displayName: data.name });
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const UserLogin = createAsyncThunk("login", async (data, thunkAPI) => {
    try {
        const user = await signInWithEmailAndPassword(auth, data.email, data.password)
        return user;
    } catch (error) {
        const errors = error;
        return error;
    }
})
export const fetchUserFile = createAsyncThunk
    (
        'files/fetchUserFilesfetchUserFile',
        async (userId, { rejectWithValue }) => {
            try {
                const filesRef = collection(firestore, 'files');
                const userFilesQuery = query(filesRef, where('userId', '==', userId));
                const snapshot = await getDocs(userFilesQuery);
                const files = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                return files;
            } catch (error) {
                return rejectWithValue(error.message);
            }
        }
    );
export const uploadFile = createAsyncThunk(
    'files/upload',
    async (data) => {
        const { file, userUid } = data;
        console.log(file)
        try {
            const storage = getStorage();
            const namer = `${new Date()}_${file.name}`;
            const storageRef = ref(storage, namer);
            const uploadTask = uploadBytesResumable(storageRef, file);

            const snapshot = await uploadTask;

            const url = await getDownloadURL(snapshot.ref);

            const fileData = {
                name: namer,
                filename: file.name,
                url: url,
                userId: userUid.uid,
            };

            const docRef = await addDoc(collection(firestore, 'files'), fileData);

            return {
                id: docRef.id,
                ...fileData,
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);

export const deleteFile = createAsyncThunk('Delete', async (payload) => {
    console.log(payload);

    const storageRef = ref(storage, payload.name);

    // Check if the file exists before attempting to delete it
    try {
        await getDownloadURL(storageRef);

        // The file exists, so delete it
        await deleteObject(storageRef);

        console.log("File deleted successfully");

        // Also delete the corresponding document in Firestore
        await deleteDoc(doc(firestore, "files", payload.id));

        console.log("Document deleted successfully");
    } catch (error) {
        console.error("Error deleting file or document:", error);
    }
});



export const DeleteFolder = createAsyncThunk(
    'user/deleteUserData',
    async (uid, { rejectWithValue }) => {
      try {
        await deleteDoc(doc(firestore, "Folders", uid));
        return uid;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

  // Create an asynchronous thunk to fetch a file by its ID
  export const fetchFileById = createAsyncThunk(
    'files/fetchById',
    async (fileId, { rejectWithValue }) => {
      try {
        const filesRef = collection(firestore, 'Folders');
        // Fetch the file document from Firestore by its ID
        const fileDoc = await filesRef.doc(fileId).get();
  
        if (!fileDoc.exists) {
          throw new Error('File not found'); // Handle the case where the file doesn't exist
        }
  
        // Assuming the file data is stored in the 'data' field
        const fileData = fileDoc.data().data;
  
        return { id: fileId, data: fileData };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

// export const deleteFile = createAsyncThunk('Delete', async (payload) => {
//     console.log(payload )
//     const storageRef = ref(storage, payload.name);
//     deleteObject(storageRef)
//         .then(() => {
//             console.log("File deleted successfully");
//             deleteDoc(doc(firestore, "files", payload.id))
//                 .then(() => {
//                     console.log("Document deleted successfully");
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// })

export const newFolder = createAsyncThunk("newFOlder", async(payload)=>{
    console.log(payload)
    const folder = {
        name: payload.name,
        userId: payload.userId,
        folder:[],
        files:[],
        type:"folder"
    }
    const folderRef = collection(firestore, "Folders");

    await addDoc(folderRef, folder)
})
export const getUserFolder = createAsyncThunk
    (
        'folders/get',
        async (userId, { rejectWithValue }) => {
            try {
                const filesRef = collection(firestore, 'Folders');
                const userFolder = query(filesRef, where('userId', '==', userId));
                const snapshot = await getDocs(userFolder);
                const folders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                return folders;
            } catch (error) {
                return rejectWithValue(error.message);
            }
        }
    );

    export const changeUserProfile = createAsyncThunk(
        'user/changeProfile',
        async (data, { rejectWithValue }) => {
          console.log(data)
          try {
            await updateProfile(auth.currentUser, {
              displayName: data.username,
            });
            return auth.currentUser;
          } catch (error) {
            return rejectWithValue(error.message);
          }
        }
      );