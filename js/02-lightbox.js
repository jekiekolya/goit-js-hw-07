import { galleryItems } from './gallery-items.js';
// Change code below this line

// Get Ref
const list = document.querySelector('.gallery');

// Create gallery markup
let galleryMarkupString = '';
function createGalleryMarkup(gallery) {
  for (const img of gallery) {
    galleryMarkupString += `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
  </a>
</li>`;
  }
  return galleryMarkupString;
}
list.innerHTML = createGalleryMarkup(galleryItems);

// Add event listener
list.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
