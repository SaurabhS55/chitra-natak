import React from 'react'
import classes from './SearchPage.module.css'
// import Categories from './categories/Categories'
import Video from '../components/home/video/Video'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'
import InfiniteScroll from 'react-infinite-scroll-component'
import TailSpin from 'react-loading-icons/dist/esm/components/tail-spin'
import SearchVideoCard from '../components/home/video/SearchVideoCard'
const SearchPage = () => {
  const slider=useSelector(state=>state.slider.slider);
  const videos = useSelector(state => state.youtube.videos)
  const searchTerm = useSelector(state => state.youtube.searchTerm)
  const navigate = useNavigate()
  console.log(videos)
  console.log(searchTerm)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if(searchTerm){
      dispatch(getSearchPageVideos(false))
    }
    else{
      navigate('/')
    }
  }, [dispatch])
  return (
    <div className={classes.home}>
        {/* <Categories/> */}
        {videos.length?<InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getSearchPageVideos(true))}
          hasMore={videos.length<300}
          loader={<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}><TailSpin/></div>}
          height={650} 
        >
        <div className={(slider)?classes.video_container1:classes.video_container}>
            {
                videos.map((item, index) => (
                   <SearchVideoCard key={index} item={item}/>
                ))
            }
        </div>
        </InfiniteScroll>:<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}><TailSpin/></div>}
    </div>
  )
}

export default SearchPage