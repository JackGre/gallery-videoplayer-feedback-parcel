// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const listGallery = createListGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", listGallery);

function createListGallery() {
  return galleryItems
    .map(
      (item) =>
        `<li class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img class="gallery__image" src=${item.preview} alt=${item.description} />
            </a>
        </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
