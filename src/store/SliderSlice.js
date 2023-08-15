import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    slider:false
};
const sliderSlice = createSlice({
    name:"slider",
    initialState,
    reducers:{
        toggleSlider:(state)=>{
            state.slider = !state.slider;
        }
    }
});
export const { toggleSlider } = sliderSlice.actions;
export default sliderSlice.reducer;
