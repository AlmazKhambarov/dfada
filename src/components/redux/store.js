import { configureStore } from "@reduxjs/toolkit";
import filesSlice from "./filesSlice/filesSlice";
import loginSlice from "./loginSlice/loginSlice";

const store = configureStore({
    reducer: {
        files: filesSlice,
        login: loginSlice,
    }
});
export default store;