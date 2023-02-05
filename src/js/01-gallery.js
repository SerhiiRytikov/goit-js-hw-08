// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryAllPhotoPreview = document.querySelector('.gallery');

const gelImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
      <img class="gallery__image" src=${preview} 
      alt=${description} /></a>`
  )
  .join('');

galleryAllPhotoPreview.innerHTML = gelImg;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
