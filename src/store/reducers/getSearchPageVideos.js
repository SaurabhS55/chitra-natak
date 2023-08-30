import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { parseData } from '../../utils/parseData';
// const API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;
export const getSearchPageVideos = createAsyncThunk(
    "youtube/searchPageVideos",
    async (isNext, { getState }) => {
        const {
            youtube: { nextPageToken: nextPageTokenFromState, videos,searchTerm },
          } = getState();
          const response= await axios.get(
              `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`
              );
              console.log(searchTerm);
        const parse= await parseData(response.data.items);
        // console.log(parse);
        return {items:[...videos,...parse],nextPageToken:response.data.nextPageToken}
    }
);
