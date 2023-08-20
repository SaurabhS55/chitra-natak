import React from 'react'
import classes from './Home.module.css'
import Categories from './categories/Categories'
import Video from './video/Video'
import { useSelector,useDispatch } from 'react-redux'
import { getHomePageVideos } from '../../store/reducers/getHomePageVideos'
const Home = () => {
  const slider=useSelector(state=>state.slider.slider);
  const videos = useSelector(state => state.youtube.videos)
  // console.log(videos)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getHomePageVideos())
  }, [dispatch])
  return (
    <div className={classes.home}>
        <Categories/>
        <div className={(slider)?classes.video_container1:classes.video_container}>
            {
                videos.map((item, index) => (
                   <Video key={index} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home