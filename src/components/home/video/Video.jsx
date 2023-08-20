import React from "react";
import classes from "./Video.module.css";
import { useSelector } from "react-redux";
const Video = (props) => {
  const slider=useSelector(state=>state.slider.slider);
  const t=props.item.videoTitle;
  return (
    <div className={(slider)?classes.vd:classes.video}>
      <div className={classes.thumbnail}>
        <img src={props.item.videoThumbnail} alt="yt"/>
        <span className={classes.duration}>{props.item.videoDuration}</span>
      </div>
      <div className={classes.description}>
        <img src={props.item.channelInfo.image} alt="#"/>
        <div className={classes.details}>
          <h4 className={classes.title}>{(t.trim().length>50)?t.substring(0,50)+"...":t}</h4>
          <p className={classes.channel_name}>{props.item.channelInfo.name}</p>
          <p className={classes.views}>{props.item.videoViews} • {props.item.videoAge}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
