import React from 'react';
import classes from './Home.module.css';
import Categories from './categories/Categories';
import Video from './video/Video';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getHomePageVideos } from '../../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import TailSpin from 'react-loading-icons/dist/esm/components/tail-spin';

const Home = () => {
  const slider = useSelector(state => state.slider.slider);
  const videos = useSelector(state => state.youtube.videos);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  // Check if the user is offline and redirect to "Not Found" page
  React.useEffect(() => {
    if (!navigator.onLine) {
      setTimeout(() => {
        navigate('/notfound');
      }, 10000);
    }
  }, [navigate]);

  return (
    <div className={classes.home}>
      <Categories />
      {videos.length ? (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getHomePageVideos(true))}
          hasMore={videos.length < 300}
          loader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <TailSpin />
            </div>
          }
          height={650}
        >
          <div className={slider ? classes.video_container1 : classes.video_container}>
            {videos.map((item, index) => (
              <Video key={index} item={item} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <TailSpin />
        </div>
      )}
    </div>
  );
};

export default Home;
