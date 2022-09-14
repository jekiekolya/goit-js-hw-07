import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Get Ref
const list = document.querySelector('.gallery');

// Create gallery markup
let galleryMarkupString = '';
function createGalleryMarkup(gallery) {
  for (const img of gallery) {
    galleryMarkupString += `<li>
  <a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="Image description" />
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

  var lightbox = $('.gallery a').simpleLightbox({
    /* options */
  });

  lightbox.open();
}
