import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { parseData } from '../../utils/parseData';
// const API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;
export const getHomePageVideos = createAsyncThunk(
    "youtube/homePageVideos",
    async (isNext, { getState }) => {
        const {
            youtube: { nextPageToken: nextPageTokenFromState, videos },
          } = getState();
        const response= await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?maxResults=400&q="trending"&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`
        );
        const parse= await parseData(response.data.items);
        return {items:[...videos,...parse],nextPageToken:response.data.nextPageToken}
    }
);
