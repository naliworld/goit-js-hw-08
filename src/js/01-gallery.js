// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryImages = document.querySelector("ul.gallery");
galleryImages.style.listStyle = 'none';

const markup = galleryItems.reduce(
    (acc,{original, preview, description}) => 
    (acc += `<li>
    <a class="gallery__item" href="${original}">
    <img 
    class= "gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>
    </li>`),
    ''
);
galleryImages.insertAdjacentElement('beforeend', markup);
let lightbox = new SimpleLightbox (".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
console.log(galleryItems);
