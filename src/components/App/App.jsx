import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';
import { fetchGallery } from '../../galleryApi/gallery.api';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import "./App.css"

function App() {
  const [galleryList, setGalleryList] = useState([]);
  // const [taskStatus, setTaskStatus] = useState([]);

  const refreshGallery = () => {
    const galleryPromise = fetchGallery();
    galleryPromise
      // success
      .then((response) => {
        console.log('SERVER DATA:', response.data);
        setGalleryList(response.data);
      })
      // failure
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  // initial load of component
  useEffect(() => {
    // body of effect
    console.log('Rendering list on Initial Load');
    // api call
    refreshGallery();
  }, []);

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <main data-testid="galleryList">
      <GalleryList galleryList={galleryList} />
      </main>
    </div>
  );
}

export default App;
