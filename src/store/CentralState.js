import { configureStore} from "@reduxjs/toolkit";
import YoutubeSlice from "./YoutubeSlice";
import SliderSlice from "./SliderSlice";
const store = configureStore({
    reducer: {
        // reducers
        slider: SliderSlice,
        youtube: YoutubeSlice,
    }
});
export default store;