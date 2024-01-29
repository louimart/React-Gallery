function GalleryItem({ imageData }) {
  console.log('GalleryItem #:', imageData.id);
  console.log('GalleryItem URL:', imageData.description);
  return (
    <div key={imageData.id} data-testid="galleryItem">
      <img
        src={imageData.url}
        alt={`${imageData.title}, ${imageData.description}`}
      />
    </div>
  );
}

export default GalleryItem;
