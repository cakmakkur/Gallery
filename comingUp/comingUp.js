const langButton = document.querySelector('.languageButton');
const title = document.querySelector('.title');
const info = document.querySelector('.info');
const link = document.querySelector('.link');

let currentLanguage = 'de'

function changeLanguage () {
  if (currentLanguage === 'en') {
    title.innerHTML = `<h1>Kommt bald</h1>`;
    info.innerHTML = `Diese Seite befindet sich derzeit im Aufbau. <br />
    Echt keine Ahnung wann sie fertig sein wird aber wenn es soweit ist wird es legendär! <br />Also komm später wieder...`
    link.innerHTML = `Zurück zur <span class="gal">Gallerie</span>`;
    langButton.innerHTML = 'EN';
    currentLanguage = 'de';
  } else {
    title.innerHTML = `<h1>Coming Up</h1>`;
    info.innerHTML = `This page is currently under construction. <br />
    We don't know yet when it will be ready but once it is, it will be
    pretty awesome! <br />Please come back later...`
    link.innerHTML = `Turn back to the <span class="gal">Gallery</span>`;
    langButton.innerHTML = 'DE';
    currentLanguage = 'en';
  }
}

function renderPage () {changeLanguage();};
renderPage();
