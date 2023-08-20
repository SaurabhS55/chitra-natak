import axios from "axios";
import { convertRawViewstoString } from "./convertRawViewsToString";
import { parseVideoDuration } from "./parseVideoDuration";
import { timeSince } from "./timeSince";
import { parseRecommendedData } from "./parseRecommendedData";
const YOUTUBE_API_URL= "https://youtube.googleapis.com/youtube/v3"

export const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];
    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc`
    );

    const parsedChannelsData = [];
    channelsData.forEach((channel) => {
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      });
    });

    const {
      data: { items: videosData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc`
    );

    const parsedData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelsData.find(
        (data) => data.id === item.snippet.channelId
      );
      if (channelImage) {
        parsedData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertRawViewstoString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};
