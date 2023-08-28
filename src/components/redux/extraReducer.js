import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore, storage } from "./api/firebase";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

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

export const deleteFile = createAsyncThunk('Delete', async (props) => {
    console.log(props)
    const storageRef = ref(storage, props?.name);
    deleteObject(storageRef)
        .then(() => {
            console.log("File deleted successfully");
            deleteDoc(doc(firestore, "files", props.id))
                .then(() => {
                    console.log("Document deleted successfully");
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
})
