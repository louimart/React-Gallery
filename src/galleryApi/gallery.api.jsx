import axios from 'axios';
// import imageData from './'

export const fetchGallery = () => {
  // axios GET call
  return axios.get('/api/gallery');
};

export const incrementLike = (id, likes) => {
  // axios PUT call
  console.log('PUT Call imageData', id)
  return axios.put(`/api/gallery/${id}`);
};