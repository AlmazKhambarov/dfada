import { createSlice } from "@reduxjs/toolkit";
import { deleteFile, fetchUserFile, uploadFile } from "../extraReducer";

const initialState = {
    loading: null,
    error: null,
    filesData: [],
    deleteFiles: null,
    loadingUpload: null
}
const filesSlice = createSlice({
    name: "file",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadFile.pending, (state, action) => {
                state.loadingUpload = true;
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                state.loadingUpload = false
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.error = action.error.message
            });
        builder
            .addCase(fetchUserFile.pending, (state, action) => {
                // state.loadingUpload = true;
                state.loading = true
            })
            .addCase(fetchUserFile.fulfilled, (state, action) => {
                state.loadingUpload = false
                state.filesData = action.payload
                state.loading = false

            })
            .addCase(fetchUserFile.rejected, (state, action) => {
                state.error = action.error.message
            })
        builder
            .addCase(deleteFile.pending, (state, action) => {
                state.deleteFiles = true;
                console.log("pending")
            })
            .addCase(deleteFile.fulfilled, (state, action) => {
                state.deleteFiles = false;
                console.log("deleted")
            })
            .addCase(deleteFile.rejected, (state, action) => {
                state.error = action.error.message

            })
    }
});

export const { } = filesSlice.actions
export default filesSlice.reducer