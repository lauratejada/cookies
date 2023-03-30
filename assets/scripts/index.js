'use strict';

// Cookies

console.log(document.cookie ? 'Cookies available' : 'No cookies found');
checkCookies();

import { getCookie, setCookie, deleteCookie, date } from './cookies.js';

const sHeight = screen.height;
const sWidth = screen.width;
console.log(document.cookie);

function getOS(){
  return navigator.userAgentData.platform;
}

function getBrowser() {
 return navigator.userAgentData.brands[0].brand;
}

// Modals

const modal = document.querySelector('.modal');
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
  document.cookie = `Screen Height=${encodeURIComponent(sHeight)}; path=/; max-age=15; SameSite=Lax`;
  document.cookie = `Screen Width=${encodeURIComponent(sWidth)}; path=/; max-age=15; SameSite=Lax`;
  modal.style.display = "none";  
});

btnSettings.addEventListener('click', () => {
  modalTwo.style.display = "block";
  modalOne.style.display = "none";  
});

btnPreferences.addEventListener('click', () => {
  modal.style.display = "none"; 
  // check checkbox values
  if(!checkBrowser.checked) { setCookie('Browser', 'rejected', {'max-age': 15}); }
  if(!checkSystem.checked) { setCookie('System', 'rejected', {'max-age': 15}); }
  if(!checkWidth.checked) { setCookie('Screen Width', 'rejected', {'max-age': 15}); }
  if(!checkHeigth.checked) { setCookie('Screen Height', 'rejected', {'max-age': 15}); }
});

// Open modal
function openModal() {
  modal.style.display = "grid";
}

// check cookies available before open the modal
function checkCookies() {
  if(!document.cookie)
    setTimeout(openModal, 2000);
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.addEventListener('keydown', function(e){
    //console.log(e.code);
    if (e.code === "Escape") {
        modal.style.display = "none";
    }
});

