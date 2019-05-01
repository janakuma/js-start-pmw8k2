import { getTime } from './index.js';

const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      greeting = document.querySelector('.js-greetings'),
      timeStamp = document.querySelector('.timeStamp');


const USER_LS = "currentUser",
      SHOWING_CN = "showing";

//함수를 재사용 하고 싶다.
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);  
  saveName(currentValue);  
  //getTime();
}


function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}      


function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  
  console.log(text);
}


function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    //she is not
    askForName();

  } else {
    //she is
    paintGreeting(currentUser);
  }
}


function init() {
  loadName();
}

init();