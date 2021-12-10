import { galleryItems } from './gallery-items.js';
// Change code below this line

const div = document.querySelector('.gallery');

const images = galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${ description}
      />
    </a>
  </div>`).join("");
    div.insertAdjacentHTML('beforeEnd', images);

    div.addEventListener("click", modalOpen)

    

    function modalOpen(e){
        e.preventDefault();
        const url = e.target.getAttribute('data-source');
        if (e.target === e.currentTarget) {
            return }
            const instance = basicLightbox.create(`
            <img src=${url} width="800" height="600">
            `)
         
         instance.show()
    }
        
        
        
        
  


  



    