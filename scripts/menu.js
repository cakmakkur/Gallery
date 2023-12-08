let header = document.querySelector('.header');
let sideMenu = document.querySelector('.insertSidemenu');

let home = "Home";
let upcoming = "Upcoming Projects";
let events = "Events";
let contact= "Contact";
let about = "About";
let showLanguage = "DE"


function renderMenus () {
  header.innerHTML = `
  <div class="largeHeader">
      <img class="largeScreenLogo" src="./assets/logo.png" alt="" />
      <nav class="menuBar">
        <ul class="menuBarItems">
          <li class="menuBarItem">
            <a href="./comingUp/comingUp.html"
              ><svg
                class="iconSvg"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M240-200h156v-234h168v234h156v-360L480-742 240-560v360Zm-28 28v-402l268-203 268 203v402H536v-234H424v234H212Zm268-299Z"
                />
              </svg>
              &nbsp;${home}</a
            >
          </li>
          <li class="menuBarItem">
            <a href="./comingUp/comingUp.html">
              <svg
                class="iconSvg"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M603-132v-28h125q12 0 22-10t10-22v-336H200v154h-28v-314q0-26 17-43t43-17h80v-92h32v92h276v-92h28v92h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H603ZM320-37l-19-19 128-130H66v-28h363L301-344l19-19 163 163L320-37ZM200-556h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Z"
                />
              </svg>
              &nbsp;${upcoming}</a
            >
          </li>
          <li class="menuBarItem">
            <a href="./comingUp/comingUp.html">
              <svg
                class="iconSvg"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-92h32v92h276v-92h28v92h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-336H200v336q0 12 10 22t22 10Zm-32-396h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Zm280 164q-11 0-19.5-8.5T452-420q0-11 8.5-19.5T480-448q11 0 19.5 8.5T508-420q0 11-8.5 19.5T480-392Zm-160 0q-11 0-19.5-8.5T292-420q0-11 8.5-19.5T320-448q11 0 19.5 8.5T348-420q0 11-8.5 19.5T320-392Zm320 0q-11 0-19.5-8.5T612-420q0-11 8.5-19.5T640-448q11 0 19.5 8.5T668-420q0 11-8.5 19.5T640-392ZM480-240q-11 0-19.5-8.5T452-268q0-11 8.5-19.5T480-296q11 0 19.5 8.5T508-268q0 11-8.5 19.5T480-240Zm-160 0q-11 0-19.5-8.5T292-268q0-11 8.5-19.5T320-296q11 0 19.5 8.5T348-268q0 11-8.5 19.5T320-240Zm320 0q-11 0-19.5-8.5T612-268q0-11 8.5-19.5T640-296q11 0 19.5 8.5T668-268q0 11-8.5 19.5T640-240Z"
                />
              </svg>
              &nbsp;${events}</a
            >
          </li>
          <li class="menuBarItem">
            <a href="./comingUp/comingUp.html">
              <svg
                class="iconSvg"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm288-274L160-698v426q0 14 9 23t23 9h576q14 0 23-9t9-23v-426L480-486Zm0-34 304-200H176l304 200ZM160-698v-22 448q0 14 9 23t23 9h-32v-458Z"
                />
              </svg>
              &nbsp;${contact}</a
            >
          </li>
          <li class="menuBarItem">
            <a href="./comingUp/comingUp.html">
              <svg
                class="iconSvg"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M524-92q-73.091 0-137.045-27.5Q323-147 275-195t-75.5-111.955Q172-370.909 172-444q0-108 59.5-196.5T391-769q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T524-92Zm0-28q88 0 163-44t118-121.277q-86-8.029-163-43.656-77-35.628-138-96.848Q443-487 407-563.5T364-726q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-306Z"
                />
              </svg>
              &nbsp;${about}
            </a>
          </li>
        </ul>
      </nav>
      <div class="language">
        <button onclick="changeLanguage()" class="languageButton">${showLanguage}</button>
      </div>
    </div>
    <div class="mobileHeader">
      <div class="mobileLogo">
        <i class="fa-solid fa-moon fa-xl" style="color: #f7f6d9"></i>
        <img class="mobileBrand" src="./assets/brand-wh-o.png" alt="" />
      </div>
      <div class="sidebarLanguage">
        <button onclick="changeLanguage()" class="sidebarLanguageButton">${showLanguage}</button>
      </div>
    </div>
  `
  sideMenu.innerHTML = `
    <nav class="sidebar">
      <ul class="menuItems">
        <li class="menuItem">
          <a href="./comingUp/comingUp.html">${home.toUpperCase()}</a>
        </li>
        <li class="menuItem">
          <a href="./comingUp/comingUp.html">${upcoming.toUpperCase()}</a>
        </li>
        <li class="menuItem">
          <a href="./comingUp/comingUp.html">${events.toUpperCase()}</a>
        </li>
        <li class="menuItem">
          <a href="./comingUp/comingUp.html">${contact.toUpperCase()}</a>
        </li>
        <li class="menuItem">
          <a href="./comingUp/comingUp.html">${about.toUpperCase()}</a>
        </li>
      </ul>
    </nav>
    <!-- SIDEBAR BUTTON -->
    <div class="menuButton">
      <span class="burgerItem"></span>
    </div>
  `
}

renderMenus();

let currentLanguage = 'en';


function changeLanguage () {
  if (currentLanguage === 'en') {
    home = 'Startseite',
    upcoming = 'Anstehende Projekte',
    events = 'Veranstaltungen',
    contact = 'Kontakt',
    about = 'Impressum'
    showLanguage = 'EN';
    currentLanguage = 'de';
    renderMenus();
    defineSidemenu();
  } else {
    home = 'Home',
    upcoming = 'Upcoming Projects',
    events = 'Events',
    contact = 'Contact',
    about = 'About'
    showLanguage = 'DE';
    currentLanguage = 'en';
    renderMenus();
    defineSidemenu();
  }
}

let isOpen = false;

let sideBar;
let main;
let burgerItem;
let menuItems;

function defineSidemenu () {
  const menuButton = document.querySelector('.menuButton');

  sideBar = document.querySelector('.sidebar');
  main = document.querySelector('.main');
  burgerItem = document.querySelector('.burgerItem');
  menuItems = document.querySelectorAll('.menuItem');

  menuButton.addEventListener('mouseover', hoverColor);
  menuButton.addEventListener('mouseout', hoverColor);
  menuButton.addEventListener('click', toggleSidemenu);
}
defineSidemenu();


function toggleSidemenu () {
  if (!isOpen) {
    document.body.classList.add('no-scroll');
    sideBar.classList.add('open');
    main.classList.add('open');
    burgerItem.classList.add('open');
    menuItems.forEach((item) => {
      item.classList.add('open');
    })
    isOpen = true;
  } else {
    document.body.classList.remove('no-scroll');
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