import { items } from "../data/items.js";

// const loadingScreen = document.querySelector('.loadingScreen');

// setTimeout(function () {
//   loadingScreen.style.display = 'none'
// }, 3300);


let productsHTML = '';

items.forEach((item) => {
  productsHTML += `
    <div class="productContainer product${item.id}">
      <div class="productImage">
        <img 
        class="itemImage" 
        data-image-id="${item.id}" 
        src="paintings/painting-${item.id}-sm.jpeg"
        srcset="paintings/painting-${item.id}-sm.jpeg 800w,
                paintings/painting-${item.id}.jpeg 2000w"
        alt="Oil Painting" 
        loading="${Number(item.id) < 6 ? "eager" : "lazy"}"/>
      </div>
      <div class="productInfo">
        ${item.info}
        <svg
          class="q-mark"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            fill="currentColor"
            d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>
      </div>
    </div>
    <div class="modal" data-id="${item.id}">
        <div class="xButtonWrapper">
        <span class="xButton"></span>
        </div>
        <img src="paintings/painting-${item.id}.jpeg"
        srcset="paintings/painting-${item.id}-sm.jpeg 800w,
                paintings/painting-${item.id}.jpeg 2000w" class="modal-content" loading="lazy" alt="Oil painting">
    </div>
  `
})

document.querySelector('.productGridContainer').innerHTML = productsHTML;




//Full Screen Image

const itemImages = document.querySelectorAll('.itemImage');
const modals = document.querySelectorAll('.modal');
const headerBar = document.querySelector('.header');
const menuButton = document.querySelector('.menuButton');


let currentFullImage;

itemImages.forEach((image) => {
  const imageId = image.dataset.imageId;
  modals.forEach((modal) => {
    const modalId = modal.dataset.id;
    if (modalId === imageId) {
      image.addEventListener('click', () => {
        modal.style.display = "flex";
        headerBar.style.display = 'none';
        menuButton.style.display = 'none';
        currentFullImage = image;
      })
    }
  })
})


window.onclick = function(event) {
  modals.forEach((modal) => {
    const scrWidth = window.innerWidth;
    if (event.target === modal) {
      modal.style.display = "none";
      headerBar.style.display = 'flex';
      if (scrWidth <= 700) {
        menuButton.style.display = 'block'
      }
    }
  }) 
};

window.onkeydown = function(event) {
  modals.forEach((modal) => {
    const scrWidth = window.innerWidth;
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      modal.style.display = "none";
      headerBar.style.display = 'flex';
      if (scrWidth <= 700) {
        menuButton.style.display = 'block'
      }
    }
  }) 
}

// X BUTTON

const xButtons = document.querySelectorAll('.xButtonWrapper');
xButtons.forEach((button) => {
  button.addEventListener('click', closeFullScr);
})
function closeFullScr () {
  modals.forEach((modal) => {
      const scrWidth = window.innerWidth;
      modal.style.display = "none";
      headerBar.style.display = 'flex';
      if (scrWidth <= 700) {
        menuButton.style.display = 'block'
      }
    }
  ) 
}