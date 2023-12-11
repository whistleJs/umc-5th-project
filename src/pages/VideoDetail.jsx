import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const {
    state: { title, poster_path },
  } = useLocation();

  return (
    <div className="video-detail-page">
      <div className="container">
        <img
          src={
            "https://www.themoviedb.org/t/p/w440_and_h660_face" + poster_path
          }
          alt="poster"
        />

        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default VideoDetail;
