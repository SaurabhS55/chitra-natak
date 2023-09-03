import axios from "axios";
import { convertRawViewstoString } from "./convertRawViewsToString";
import { parseVideoDuration } from "./parseVideoDuration";
import { timeSince } from "./timeSince";
export const parseRecommendedData = async (items, videoId) => {
  // console.log(items);
  try {
    const videoIds = [];
    const channelIds = [];
    const newItems = [];
    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      if (item.contentDetails?.upload?.videoId) {
        videoIds.push(item.contentDetails.upload.videoId);
        newItems.push(item);
      }
    });
    // console.log(newItems);
    const videosData = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=AIzaSyDiNdcxyt7GjWqKn5JKceGAMzHm9ZArKhc`
    );
    console.log(videosData.data.items);
    const parsedData = [];
    newItems.forEach((item, index) => {
      if (index >= videosData.data.items.length) return;
      if (videoId === item?.contentDetails?.upload?.videoId) return;
      parsedData.push({
        videoId: item.contentDetails.upload.videoId,
        videoTitle: item.snippet.title,
        videoThumbnail: item.snippet.thumbnails.medium.url,
        videoDuration: parseVideoDuration(
          videosData.data.items[index].contentDetails.duration
        ),
        videoViews: convertRawViewstoString(
          videosData.data.items[index].statistics.viewCount
        ),
        videoAge: timeSince(new Date(item.snippet.publishedAt)),
        channelInfo: {
          id: item.snippet.channelId,
          name: item.snippet.channelTitle,
        },
      });
    });
// console.log(parsedData);
    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

