/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
    DeleteFolder,
  deleteFile,
  fetchFileById,
  fetchUserFile,
  getUserFolder,
  newFolder,
  uploadFile,
} from "../extraReducer";

const initialState = {
  loading: null,
  error: null,
  filesData: [],
  deleteFiles: null,
  loadingUpload: null,
  foldersData: null,
  createLoading: null,
  folderDeleted:null,
  file:null
};
const filesSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserFolder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserFolder.fulfilled, (state, action) => {
        state.loading = false;
        state.foldersData = action.payload;
      })
      .addCase(getUserFolder.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(uploadFile.pending, (state, action) => {
        state.loadingUpload = true;
        state.deleteFiles = "k"
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loadingUpload = false;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(fetchUserFile.pending, (state, action) => {
        state.loadingUpload = true;
        state.loading = true;
      })
      .addCase(fetchUserFile.fulfilled, (state, action) => {
        state.loadingUpload = false;
        state.filesData = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserFile.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(deleteFile.pending, (state, action) => {
        state.deleteFiles = true;
        console.log("pending");
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.deleteFiles = false;
        console.log("deleted");
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(DeleteFolder.pending, (state, action) => {
        state.deleteFiles = true;
        console.log("pending");
      })
      .addCase(DeleteFolder.fulfilled, (state, action) => {
        state.deleteFiles = false;
        state.folderDeleted = "delete"
        console.log("deleted");
      })
      .addCase(DeleteFolder.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(newFolder.pending, (state, action) => {
        state.createLoading = true;
      })
      .addCase(newFolder.fulfilled, (state, action) => {
        state.createLoading = false;
      })
      .addCase(newFolder.rejected, (state, action) => {
        state.error = action.error.message;
      });
      builder
      .addCase(fetchFileById.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(fetchFileById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.file = action.payload;
      })
      .addCase(fetchFileById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {} = filesSlice.actions;
export default filesSlice.reducer;
