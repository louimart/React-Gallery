// import galleryList from '../App/App.jsx'

import { useState } from 'react';
import '../App/App.css';
import { incrementLike } from '../../galleryApi/gallery.api';

function GalleryItem({ imageData, refreshGalleryCallBack }) {
  // console.log('GalleryItem #:', imageData.id);
  // console.log('GalleryItem URL:', imageData.description);
  let [displayImage, setDisplayImage] = useState(true);
  let [likeImage, setLikeImage] = useState(0);

  const handleClickLike = (id) => {
    console.log('PUT update Likes - imageData.Id:', id);
    incrementLike(id)
      .then((response) => {
        likeImage++;
        refreshGalleryCallBack();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
    console.log('after liked', imageData.title, imageData.likes, likeImage);
  };

  const handleClickToggleImage = (id) => {
    // console.log('Image CLICKED:', imageData.title);
    // console.log('Display Image?', imageData.display_description);
    setDisplayImage(!displayImage);
    console.log('showImage: t/f?', displayImage);
    console.log('setShowImage: t/f?', setDisplayImage);
    refreshGalleryCallBack();
  };

  let image = [
    <div key={imageData.id} data-testid="toggle">
      <img
        src={imageData.url}
        alt={`${imageData.description}`}
        // onClick={() => handleClickToggleImage()}
      />
    </div>,
  ];

  let imageDescription = [
    <div
      key={imageData.id}
      data-testid="toggle"
      // onClick={() => handleClickToggleImage()}
    >
      <p>{imageData.description}</p>
    </div>,
  ];

  return (
    <>
      <div
        data-testid="galleryItem"
        className="galleryItem"
        onClick={() => handleClickToggleImage()}
      >
        <h3>{imageData.title}</h3>
        {displayImage ? image : imageDescription};
      </div>
      <button className="likes" onClick={() => handleClickLike(imageData.id)}>
        Likes {imageData.likes}
      </button>
    </>
  );
}

export default GalleryItem;
