import defaultExport, * as gallery from "./gallery-items.js";

const galleryItems = gallery.default;
const mainNodeGallery = document.querySelector(".gallery");
const modalWindow = document.querySelector('.lightbox');
const btnModalWindow = document.querySelector('button[data-action="close-lightbox"]');
const imgModalWindow = document.querySelector(".lightbox__image");


function addItem(array, parent) {
  const createItem = array.map((objectGallery) => shapeNode(objectGallery));
    parent.append(...createItem);
}

function shapeNode(objectGallery) {
  let addTagLi = document.createElement("li");
  addTagLi.classList.add("gallery__item");

  let addTagLink = document.createElement("a");
  addTagLink.classList.add("gallery__link");
  addTagLink.setAttribute("href", objectGallery.original);
  addTagLi.append(addTagLink);

  let addTagImg = document.createElement("img");
  addTagImg.classList.add("gallery__image");
  addTagImg.setAttribute("src", objectGallery.preview);
  addTagImg.setAttribute("data-source", objectGallery.original);
  addTagImg.setAttribute("alt", objectGallery.description);
  addTagLink.append(addTagImg);
  return addTagLi;
}
function openModal(event) { 
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    imgModalWindow.setAttribute("src", event.target.dataset.source);
    modalWindow.classList.add('is-open')
}
function closeModal(event) { 
    modalWindow.classList.remove("is-open");
    imgModalWindow.setAttribute('src', '');
}

addItem(galleryItems, mainNodeGallery);
mainNodeGallery.addEventListener('click', openModal)
btnModalWindow.addEventListener('click', closeModal)
