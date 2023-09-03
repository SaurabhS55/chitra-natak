import React from "react";
// import { RecommendedVideos } from "../Types";
import { Link } from "react-router-dom";
import styles from "./watchcard.module.css"; // Import your CSS module

export default function WatchCard(props) {
  return (
    <div className={styles.watch_card}>
      <div className={styles.thumbnail_container}>
        <span className={styles.duration_label}>{props.data.videoDuration}</span>
        <Link to={`/watch/${props.data.videoId}`} className={styles.thumbnail_link} style={{color:"white"}}>
          <img
            src={props.data.videoThumbnail}
            className={styles.thumbnail_image}
            alt="thumbnail"
          />
        </Link>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <h4 className={styles.video_title}>
          <a href="#" className={`${styles.title_link} ${styles.title_clamp}`}>
            {props.data.videoTitle}
          </a>
        </h4>
        <div className={styles.channel_info}>
          <div>
            <a href="#" className={styles.channel_link}>
              {props.data.channelInfo.name}
            </a>
          </div>
          <div>
            <div>
              <span className={styles.video_views}>{props.data.videoViews} views</span>
              <span className={styles.video_age}>{props.data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
