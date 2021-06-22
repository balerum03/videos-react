import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import youtubeRequest from '../apis/youtubeRequest';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {

  const [videos, setVideos] = useState([]);
  const [videoSelected, setVideoSelected] = useState(null);

  useEffect(() => {
    onTermSubmit('super cars');
  },[]);

  const onTermSubmit = async term => {
    const res = await youtubeRequest.get('/search', {
      params: {
        q: term,
      }
    });

    setVideos(res.data.items);
    setVideoSelected(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setVideoSelected(video);
  };

  return(
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={videoSelected} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;