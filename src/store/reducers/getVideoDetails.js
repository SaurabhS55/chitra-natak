import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {convertRawViewstoString} from '../../utils/convertRawViewsToString';
import {timeSince} from '../../utils/timeSince';
const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const getVideoDetails = createAsyncThunk(
  "youtube/videoDetails",
  async (id) => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
    );

    return parseData(response.data.items[0]);
  }
);

const parseData = async (item) => {
  const channelInfoResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc`
  );

  const {
    data: {
      items: [
        {
          snippet: {
            thumbnails: {
              default: { url: channelImage },
            },
          },
          statistics: { subscriberCount },
        },
      ],
    },
  } = channelInfoResponse;

  return {
    videoId: item.id,
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description,
    videoViews: parseInt(item.statistics.viewCount).toLocaleString(),
    videoLikes: convertRawViewstoString(item.statistics.likeCount),
    videoAge: timeSince(new Date(item.snippet.publishedAt)),
    channelInfo: {
      id: item.snippet.channelId,
      image: channelImage,
      name: item.snippet.channelTitle,
      subscribers: convertRawViewstoString(subscriberCount, true),
    },
  };
};

export default getVideoDetails;
