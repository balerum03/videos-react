import React, { useState } from 'react'
import SearchBar from './SearchBar';
import youtubeRequest from '../apis/youtubeRequest';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {

  const [videos, setVideos] = useState([]);
  const [videoSelected, setVideoSelected] = useState(null);

  const onTermSubmit = async term => {
    const res = await youtubeRequest.get('/search', {
      params: {
        q: term,
      }
    });

    setVideos(res.data.items);
  };

  const onVideoSelect = (video) => {
    setVideoSelected(video);
  };

  return(
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <VideoDetail video={videoSelected} />
      <VideoList onVideoSelect={onVideoSelect} videos={videos} />
    </div>
  )
};

export default App;