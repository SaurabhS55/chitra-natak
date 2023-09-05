import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { parseRecommendedData } from "../../utils/parseRecommendedData";
const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const getRecommendedVideos = createAsyncThunk(
  "youtube/getRecommendedVideos",
  async (videoId, { getState }) => {
    const {
      youtube: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState();

    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData = await parseRecommendedData(response.data.items, videoId);

    return { parsedData };
  }
);

export default getRecommendedVideos;
