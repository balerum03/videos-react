import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect}) => {

  const renderList  = videos.map((video) => {
    return <VideoItem  key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  });

  return (
    <div className="ui relax divided list">
      {renderList}
    </div>
  )
};

export default VideoList;