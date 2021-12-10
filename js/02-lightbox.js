import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector('.gallery');

const images = galleryItems.map(({preview, original, description}) => 
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt='${description}' />
</a>
`).join("");
    div.insertAdjacentHTML('beforeEnd', images);



    div.addEventListener("click", modalOpen)

     new SimpleLightbox('.gallery a', {
        captionSelector:'img',
        captionType: 'alt',
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition:'bottom',
    })

    function modalOpen(e){
        e.preventDefault();
        
        if (e.target === e.currentTarget) {
            return }
 
        }