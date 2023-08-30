import React from 'react'
import classes from './SearchVideoCard.module.css'
const SearchVideoCard = (props) => {
  const t=props.item.videoTitle;
  return (
    <div className={classes.video_card}>
      <div className={classes.thumbnail}>
        <img src={props.item.videoThumbnail} alt="#" />
        <span className={classes.duration}>{props.item.videoDuration}</span>
      </div>
      {/* <div className={classes.video_info}>
        <h3 className={classes.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deserunt eligendi voluptatum vitae vel? Necessitatibus dolor molestias reprehenderit commodi consectetur hic, quis eveniet, ex exercitationem totam, similique cupiditate! Facilis, similique!</h3>
        <p className={classes.views}>15M views</p>
      </div> */}
      <div className={classes.description}>
          {<h4 className={classes.title}>{(t.trim().length>100)?t.substring(0,100)+"...":t}</h4>}
          {<p className={classes.views}>{props.item.videoViews} • {props.item.videoAge}</p>}
        <div className={classes.details}>
          <div style={{display:'flex',alignItems:"center",gap:"1rem"}}>
          <img src={props.item.channelInfo.image} alt="#"/>
          {<p className={classes.channel_name}>{props.item.channelInfo.name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchVideoCard