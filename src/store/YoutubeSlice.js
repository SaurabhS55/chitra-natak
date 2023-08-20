import {createSlice} from '@reduxjs/toolkit';
import { getHomePageVideos } from './reducers/getHomePageVideos';

const initialState = {
    videos: [],
    currentPlaying:null,
    searchItem:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideos:[],
};

const YoutubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            state.videos = action.payload.items;
            state.nextPageToken = action.payload.nextPageToken;
            });
    },
});

export default YoutubeSlice.reducer;

