// import galleryList from '../App/App.jsx'

import { useState } from 'react';
import "../App/App.css"

function GalleryItem({ imageData, refreshGalleryCallBack }) {
  // console.log('GalleryItem #:', imageData.id);
  // console.log('GalleryItem URL:', imageData.description);
  let [displayImage, setDisplayImage] = useState(true);
  //   <div data-testid="galleryItem" className="galleryItem">
  //   <div data-testid="toggle" onClick={togglePicture}>
  //     {showPicture ? (
  //       <img
  //         src={image.url}
  //         alt={image.title}
  //       />
  //     ) : (
  //       <p data-testid="description">
  //         {image.description}
  //       </p>
  //     )}
  //   </div>
  //   <p>{image.title}</p>
  //   <button data-testid="like" onClick={handleUpdateLikes}>
  //     Like
  //   </button>
  //   <p>{image.likes} people love this!</p>
  // </div>
  // );

  const handleClickToggleImage = () => {
    // console.log('Image CLICKED:', imageData.title);
    // console.log('Display Image?', imageData.display_description);
    // setDisplayImage = !displayImage
    // displayImage = !displayImage;
    setDisplayImage(!displayImage);
    console.log('showImage: t/f?', displayImage);
    console.log('setShowImage: t/f?', setDisplayImage);
    // refreshGalleryCallBack();
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
    <div data-testid="galleryItem" className="galleryItem" onClick={() => handleClickToggleImage()}>
      <h3>{imageData.title}</h3>
      {displayImage ? image : imageDescription};
    </div>
  );
}

export default GalleryItem;
