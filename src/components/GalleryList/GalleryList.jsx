import React from 'react';
import { useState, useEffect } from 'react';
import { fetchGallery } from '../../galleryApi/gallery.api';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, refreshGalleryCallBack }) {
  // const handleClickBuyStatus = (id) => {
  //   console.log('PUT update BUY status - groceryId:', id);
  //   updateBuyStatus(id)
  //     .then((response) => {
  //       groceryRefreshCallback();
  //     })
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  // const [galleryList, setGalleryList] = useState([]);
  // // const [taskStatus, setTaskStatus] = useState([]);

  // const refreshGallery = () => {
  //   const galleryPromise = fetchGallery();
  //   galleryPromise
  //     // success
  //     .then((response) => {
  //       console.log('SERVER DATA:', response.data);
  //       setGalleryList(response.data);
  //     })
  //     // failure
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  // // initial load of component
  // useEffect(() => {
  //   // body of effect
  //   console.log('Rendering list on Initial Load');
  //   // api call
  //   refreshGallery();
  // }, []);

  return (
    <div className="galleryList">
      {galleryList.map((imageData, imageIndex) => {
        console.log(imageData.url);
        return (
          <div key={imageIndex}>
            <GalleryItem
              refreshGalleryCallBack={refreshGalleryCallBack}
              key={imageData.id}
              imageData={imageData}
              id={imageIndex}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;
