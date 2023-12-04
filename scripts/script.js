import { items } from "../data/items.js";

let isOpen = false;

const sideBar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

const menuButton = document.querySelector('.menuButton');
const burgerItem = document.querySelector('.burgerItem');

const menuItems = document.querySelectorAll('.menuItem');

menuButton.addEventListener('mouseover', hoverColor);
menuButton.addEventListener('mouseout', hoverColor);
menuButton.addEventListener('click', toggleSidemenu);

function toggleSidemenu () {
  if (!isOpen) {
    sideBar.classList.add('open');
    main.classList.add('open');
    burgerItem.classList.add('open');
    menuItems.forEach((item) => {
      item.classList.add('open');
    })
    isOpen = true;
  } else {
    sideBar.classList.remove('open');
    main.classList.remove('open');
    burgerItem.classList.remove('open');
    menuItems.forEach((item) => {
      item.classList.remove('open');
    })
    isOpen =false;
  }
};

function hoverColor () {
  burgerItem.classList.toggle('outsideHover');
};

let productsHTML = '';

items.forEach((item) => {
  productsHTML += `
    <div class="productContainer product${item.id}">
      <div class="productImage">
        <img class="itemImage" data-image-id="${item.id}" src="paintings /${item.image}" alt="" loading="lazy"/>
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
        <img src="paintings /${item.image}" class="modal-content">
    </div>
  `
})

document.querySelector('.productGridContainer').innerHTML = productsHTML;


//Header Scroll Behaviour

const headerBar = document.querySelector('.header');
let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    headerBar.style.top = "0";
    menuButton.style.top = "16vh";
  } else if (prevScrollPos > 40 && prevScrollPos < currentScrollPos) {
    headerBar.style.top = "-16vh";
    menuButton.style.top = "2vh"
  }
  prevScrollPos = currentScrollPos;
}

//Full Screen Image

const itemImages = document.querySelectorAll('.itemImage');
const modals = document.querySelectorAll('.modal');

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
    if (event.target === modal) {
      modal.style.display = "none";
      headerBar.style.display = 'flex';
      menuButton.style.display = 'block'
    }
  }) 
};

window.onkeydown = function(event) {
  modals.forEach((modal) => {
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      modal.style.display = "none";
      headerBar.style.display = 'flex';
      menuButton.style.display = 'block'
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
      modal.style.display = "none";
      headerBar.style.display = 'flex';
      menuButton.style.display = 'block'
    }
  ) 
}