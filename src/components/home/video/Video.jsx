import React from "react";
import classes from "./Video.module.css";
import { useSelector } from "react-redux";
const Video = (props) => {
  const slider=useSelector(state=>state.slider.slider);
  const t="Karthikeya 2 Flute BGM | Lord Krishna Flute Promo | Karthikeya 2 Flute Animated Scene";
  return (
    <div className={(slider)?classes.vd:classes.video}>
      <div className={classes.thumbnail}>
        <img src="https://i.ytimg.com/vi/e0edbU7TBG4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCamnS6U5XdgiYlWttWs0KP_jkOTA" alt="yt" />
        <span className={classes.duration}>2:05</span>
      </div>
      <div className={classes.description}>
        <img src="https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s176-c-k-c0x00ffffff-no-rj-mo" alt="#"/>
        <div className={classes.details}>
          <h4 className={classes.title}>{(t.trim().length>50)?t.substring(0,50)+"...":t}</h4>
          <p className={classes.channel_name}>T-series</p>
          <p className={classes.views}>1.5M views • 1 year ago</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
