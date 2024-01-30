import { useState } from 'react';
import { incrementLike } from '../../galleryApi/gallery.api';
import '../App/App.css';

function GalleryItem({ imageData, refreshGalleryCallBack }) {
  // console.log('GalleryItem #:', imageData.id);
  // console.log('GalleryItem URL:', imageData.description);
  let [displayImage, setDisplayImage] = useState(true);
  let [likeImage, setLikeImage] = useState();

  const handleClickLike = (imageData) => {
    console.log('PUT update Likes - imageData.Id:', imageData.id);
    // setLikeImage(likeImage++)
    incrementLike(imageData.id)
      .then((response) => {
        refreshGalleryCallBack();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
    console.log('after liked', imageData.title, imageData.likes, likeImage);
  };

  const handleClickToggleImage = (id) => {
    setDisplayImage(!displayImage);
    console.log('showImage: t/f?', displayImage);
    // refreshGalleryCallBack();
  };

  let image = (
    <div key={imageData.id} data-testid="toggle">
      <img
        src={imageData.url}
        alt={`${imageData.description}`}
      />
    </div>
  );

  let imageDescription = (
    <div
      key={imageData.id}
      data-testid="toggle"
    >
      <p>{imageData.description}</p>
    </div>
  );

  return (
    <>
      <div
        data-testid="galleryItem"
        className="galleryItem"
        onClick={() => handleClickToggleImage()}
      >
        <h3>{imageData.title}</h3>
        {displayImage ? image : imageDescription}
      </div>
      <button className="likes" onClick={() => handleClickLike(imageData)}>
        Likes {imageData.likes}
      </button>
    </>
  );
}

export default GalleryItem;
