import React from "react";
import classes from "./Header.module.css";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import logo from "../../assets/app_logo.png";
import { MdApps } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { toggleSlider } from "../../store/SliderSlice";
const Header = (props) => {
  const slider=useSelector(state=>state.slider.slider);
  const dispatch=useDispatch();
  const handleSidebar = () => {
    dispatch(toggleSlider());
  }
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <div className={classes.hamburger}>
          <FaBars size={25} cursor="pointer" onClick={handleSidebar}/>
        </div>
        <div className={classes.logo}>
          <img src={logo} alt="app logo" className={classes.logo_img} />
          <span className={classes.logo_text}>CN</span>
        </div>
      </div>
      <form className={classes.search}>
        <input
          type="text"
          placeholder="Search"
          className={classes.search_input}
        />
        <button type="submit" className={classes.search_button}>
          <BiSearch size={22} color="white" />
        </button>
      </form>
      <div className={classes.useless}>
        <div className={classes.useless_icon}>
          <MdNotificationsNone size={25} cursor="pointer" />
        </div>
        <div className={classes.useless_icon}>
          <MdApps size={25} cursor="pointer" />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.profile}>
          <img
            src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
            alt="profile"
            className={classes.profile_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
