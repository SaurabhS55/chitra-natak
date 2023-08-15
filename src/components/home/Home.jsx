import React from 'react'
import classes from './Home.module.css'
import Categories from './categories/Categories'
import Video from './video/Video'
import { useSelector } from 'react-redux'
const Home = () => {
  const slider=useSelector(state=>state.slider.slider);
  return (
    <div className={classes.home}>
        <Categories/>
        <div className={(slider)?classes.video_container1:classes.video_container}>
            {
                new Array(20).fill(0).map((item, index) => (
                   <Video key={index} index={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home