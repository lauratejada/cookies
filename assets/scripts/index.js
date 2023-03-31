'use strict';

// Cookies

console.log(document.cookie ? 'Cookies available' : 'No cookies found');
checkCookies();

import { getCookie, setCookie, deleteCookie, date } from './cookies.js';

const sHeight = screen.height;
const sWidth = screen.width;

function getOS(){
  return navigator.userAgentData.platform;
}

function getBrowser() {
 return navigator.userAgentData.brands[0].brand;
}

// Modals

const modal = document.querySelector('.modal');
const dialog = document.querySelector('dialog');
const btnSettings = document.querySelector('.btn-settings');
const modalOne = document.querySelector('#modal-1');
const modalTwo = document.querySelector('#modal-2');
const btnPreferences = document.querySelector('.btn-preferences');
const btnAccept = document.querySelector('.btn-accept');
const checkBrowser = document.querySelector('.chk-browser');
const checkSystem = document.querySelector('.chk-system');
const checkWidth = document.querySelector('.chk-width');
const checkHeigth = document.querySelector('.chk-heigth');


btnAccept.addEventListener('click', () => {
  document.cookie = `Browser=${encodeURIComponent(getBrowser())}; path=/; max-age=15; SameSite=Lax`;
  document.cookie = `System=${encodeURIComponent(getOS())}; path=/; max-age=15; SameSite=Lax`;
  document.cookie = `Screen Width=${encodeURIComponent(sWidth)}; path=/; max-age=15; SameSite=Lax`;
  document.cookie = `Screen Height=${encodeURIComponent(sHeight)}; path=/; max-age=15; SameSite=Lax`;
  modal.style.display = "none";
  modalOne.close();
 // dialog.close();
});

btnSettings.addEventListener('click', function() {
  modal.style.display = "grid";
  modalTwo.showModal();
  modalOne.close();  //style.display = "none";
//.style.display = "block";
});

btnPreferences.addEventListener('click', function() {
  modal.style.display = "none"; 
  modalOne.close();
  modalTwo.close();
  document.cookie = `Browser=${encodeURIComponent(getBrowser())}; path=/; max-age=15; SameSite=Lax`;
  // check checkbox values
  if(!checkSystem.checked) { 
    document.cookie = `System=rejected; path=/; max-age=15; SameSite=Lax`;
  } else {
    document.cookie = `System=${encodeURIComponent(getOS())}; path=/; max-age=15; SameSite=Lax`;
  }

  if(!checkWidth.checked) { 
    document.cookie = `Screen Width=rejected; path=/; max-age=15; SameSite=Lax`;
  } else {
    document.cookie = `Screen Width=${encodeURIComponent(sWidth)}; path=/; max-age=15; SameSite=Lax`;
  }

  if(!checkHeigth.checked) { 
    document.cookie = `Screen Height=rejected; path=/; max-age=15; SameSite=Lax`;
  } else {
    document.cookie = `Screen Height=${encodeURIComponent(sHeight)}; path=/; max-age=15; SameSite=Lax`;
  }
});

// Open modal
function openModal() {
  modal.style.display = "grid";
  modalOne.showModal();
}

// check cookies available before open the modal
function checkCookies() {
  if(!document.cookie)
    setTimeout(openModal, 2000);
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    modalOne.close();
    modalTwo.close();
  }
});

document.addEventListener('keydown', function(e){
    //console.log(e.code);
    if (e.code === "Escape") {
        modal.style.display = "none";
        modalOne.close();
        modalTwo.close();
    }
});

console.log(document.cookie);
//console.log(document.cookie.split('; ').at(0));
//console.log(document.cookie.split('; ').at(1));
//console.log(document.cookie.split('; ').at(2));
//console.log(document.cookie.split('; ').at(3));