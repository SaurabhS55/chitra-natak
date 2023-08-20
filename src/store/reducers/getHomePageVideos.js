import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { parseData } from '../../utils/parseData';
// const API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;
export const getHomePageVideos = createAsyncThunk(
    "youtube/homePageVideos",
    async () => {
        const response= await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?maxResults=400&q="reactjs%20projects"&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc&part=snippet&type=video`
        );
        const parse= await parseData(response.data.items);
        return {items:parse,nextPageToken:response.data.nextPageToken}
    }
);
