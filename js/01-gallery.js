import { galleryItems } from './gallery-items.js';
// Change code below this lins);

// Getting Ref
const galleryBox = document.querySelector('.gallery');

// Create gallery markup
let galleryMarkupString = '';
function createGalleryMarkup(array) {
  for (const img of array) {
    galleryMarkupString += `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
      
    />
  </a>
</div>`;
  }

  return galleryMarkupString;
}

// Add gallery MarkUp on web page
galleryBox.innerHTML = createGalleryMarkup(galleryItems);

//Add event listener and function imgClickTargetHandler
galleryBox.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  let linkToOriginPhoto = event.target.dataset.source;

  // Create modal window
  const instance = basicLightbox.create(`
    <img src="${linkToOriginPhoto}" width="800" height="600">
`);
  // Show modal window
  instance.show();

  // Close modal window after pressed ESC
  window.addEventListener('keydown', pressKeyTargetHandler);
  function pressKeyTargetHandler(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', pressKeyTargetHandler);
    }
  }
});
