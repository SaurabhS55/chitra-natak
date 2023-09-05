import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import getRecommendedVideos from "../store/reducers/getRecommendedVideos";
import getVideoDetails from "../store/reducers/getVideoDetails";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import WatchCard from "../components/home/video/WatchCard";
import styles from "./Watch.module.css"; // Import your CSS module

export default function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPlaying = useSelector(
    (state) => state.youtube.currentPlaying
  );
  const recommendedVideos = useSelector(
    (state) => state.youtube.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);
// console.log(recommendedVideos)
  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className={styles.watch_container}>
          <div className={styles.video_container}>
            <div className={styles.video_content}>
              <div style={{ maxWidth: "800px" }}>
                <div>
                  <iframe
                    className={styles.video_iframe}
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className={styles.video_info}>
                    <p className={styles.video_title}>{currentPlaying.videoTitle}</p>
                    <div className={styles.video_icons}>
                      <div className={styles.video_icon}>
                        <BiLike className="text-xl" />
                        <strong>{currentPlaying.videoLikes}</strong>
                      </div>
                      {/* Add more icons and elements with appropriate styles */}
                    </div>
                    <div className={styles.channel_info}>
                      <div>
                        <img
                          src={currentPlaying.channelInfo.image}
                          alt=""
                          className={styles.channel_image}
                        />
                      </div>
                      <div>
                        <h5 className={styles.channel_name}>
                          <strong>{currentPlaying.channelInfo.name}</strong>
                        </h5>
                        <h6 className={styles.channel_subscribers}>
                          {currentPlaying.channelInfo.subscribers} subscribers
                        </h6>
                      </div>
                      <div>
                        <button className={styles.subscribe_button}>
                          subscribe
                        </button>
                      </div>
                    </div>
                    <div className={showMoreStatus ? "" : styles.video_description}>
                      <pre
                        style={{
                          fontFamily: `"Roboto", sans-serif`,
                        }}
                        className={styles.whitespace_pre_wrap}
                      >
                        {currentPlaying.videoDescription}
                      </pre>
                    </div>
                    <div>
                      <button
                        className={styles.show_more_button}
                        onClick={() => setShowMoreStatus(!showMoreStatus)}
                      >
                        Show {showMoreStatus ? "less" : "more"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.recommended_videos}>
              {recommendedVideos.length &&
                recommendedVideos.map((item) => {
                  return <WatchCard data={item} key={item.videoId} />;
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
