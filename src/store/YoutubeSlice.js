import {createSlice} from '@reduxjs/toolkit';
import { getHomePageVideos } from './reducers/getHomePageVideos';
import { getSearchPageVideos } from './reducers/getSearchPageVideos';
import getRecommendedVideos from './reducers/getRecommendedVideos';
import getVideoDetails from './reducers/getVideoDetails';
const initialState = {
    videos: [],
    currentPlaying:null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideos:[],
};

const YoutubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state,action) => {
            // console.log(action.payload);
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            state.videos = action.payload.items;
            state.nextPageToken = action.payload.nextPageToken;
            });
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.videos = action.payload.items;
            state.nextPageToken = action.payload.nextPageToken;
            });
        builder.addCase(getRecommendedVideos.fulfilled,(state,action)=>{
            state.recommendedVideos = action.payload.parsedData;
            });
        builder.addCase(getVideoDetails.fulfilled,(state,action)=>{
            state.currentPlaying = action.payload;
            });
    },
});
export const {clearVideos,changeSearchTerm,clearSearchTerm} = YoutubeSlice.actions;
export default YoutubeSlice.reducer;

