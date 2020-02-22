import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './Photos.jsx';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    axios.get(`http://localhost:3009/api/photos/${id}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log('error in axios get', error);
      });
  }, []);

  return (
    <div>
      <h1>
        {photos.length}
        {' '}
        Photos
      </h1>
      <Photos photos={photos} />
    </div>
  );
}

export default App;
