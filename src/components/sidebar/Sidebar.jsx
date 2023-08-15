import React from "react";
import classes from "./Sidebar.module.css";
import { GoHomeFill } from "react-icons/go";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdVideoLibrary,
  MdDownload,
  MdWatchLater,
} from "react-icons/md";
import { useSelector} from "react-redux";
const Sidebar = (props) => {
  const slider=useSelector(state=>state.slider.slider);
  return (
    <div className={classes.sidebar} style={{width:(slider)?"":"5%"}}>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <GoHomeFill size={25}/>
        {slider&&<span className={classes.sidebar_text}>Home</span>}
      </div>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdSubscriptions size={25}/>
        {slider&&<span className={classes.sidebar_text}>Subscriptions</span>}
      </div>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdThumbUp size={25}/>
        {slider&&<span className={classes.sidebar_text}>Liked Video</span>}
      </div>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdWatchLater size={25}/>
        {slider&&<span className={classes.sidebar_text}>Watch Later</span>}
      </div>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdHistory size={25}/>
        {slider&&<span className={classes.sidebar_text}>History</span>}
      </div>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdVideoLibrary size={25}/>
        {slider&&<span className={classes.sidebar_text}>Library</span>}
      </div>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdDownload size={25}/>
        {slider&&<span className={classes.sidebar_text}>Downloads</span>}
      </div>
      <hr style={{width:"100%"}}/>
      <div className={classes.sidebar_item} style={{justifyContent:(slider)?"":"center"}}>
        <MdExitToApp size={25}/>
        {slider&&<span className={classes.sidebar_text}>Log out</span>}
      </div>
    </div>
  );
};

export default Sidebar;
