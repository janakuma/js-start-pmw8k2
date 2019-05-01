import './style.css';
import './greeting';
import './todo';

const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 12 ? 'AM ' + `0${hours}` : 'PM ' + (hours-12)} :  ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}      

function init() {  
  getTime();
  setInterval( getTime, 1000 );  
}

init();
export {getTime};

