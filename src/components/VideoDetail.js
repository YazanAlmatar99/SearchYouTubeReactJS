import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
      //It shows loading while the api is being fetched
    return <div>Loading...</div>;
  }
  //The link for the YouTube Video
  const _videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const youtubeLink = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={_videoSrc} title = 'Video Player'/>
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p> {video.snippet.description}</p>
        <a href= {youtubeLink}>Watch on YouTube</a>
      </div>
    </div>
  );
};

export default VideoDetail;
