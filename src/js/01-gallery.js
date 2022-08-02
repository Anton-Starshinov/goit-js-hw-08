import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryConteiner = document.querySelector('.gallery');
const galleryMarcup = galleryLayoutTemplate(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryMarcup);

function galleryLayoutTemplate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
             src="${preview}"
             alt="${description}" />
        </a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
