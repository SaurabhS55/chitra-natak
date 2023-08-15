import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./SliderSlice";
const store = configureStore({
    reducer: {
        // reducers
        slider: SliderSlice
    }
});

export default store;