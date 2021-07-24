import card from '/menu.json'; 
import templateFunction from '/card.hbs';

const appEl = document.querySelector('ul.js-menu');

console.log(appEl);
appEl.innerHTML = templateFunction(card);
console.log(appEl);