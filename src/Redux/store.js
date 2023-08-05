import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice";

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})