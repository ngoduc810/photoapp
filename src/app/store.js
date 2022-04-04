import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../Photo/PhotoSlice/PhotoSlice";

const rootReducer = {
    photos: photoReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;