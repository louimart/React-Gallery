import axios from 'axios';

export const fetchGallery = () => {
  // axios GET call
  return axios.get('/api/gallery');
};

export const incrementLike = () => {
  // axios PUT call
  return axios.put('/api/gallery/like/:id');
};