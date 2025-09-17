/* Create heading node */
// const heading = document.createElement('h1')
// heading.textContent = 'Interesting!'

/* Append heading node to the DOM */
// const app = document.querySelector('#root')
// app.append(heading)


import coffeePng from './images/cup-of-coffee-200.png';
import balloonSvg from './images/hot-air-balloon.svg';
import './styles/main.scss';

/* Create a class property without a constructor */
class Game { name = 'Violin Charades' }

const myGame = new Game();

/* Create paragraph node */
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`;

/* Create heading node */
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

/* Create img node */
const img = document.createElement('img');
img.src = coffeePng;
img.width = 100;
img.setAttribute('height', 100);

/* Create svg node */
const block = document.createElement('div');
block.style.width = '100%';
block.style.height = '200px';
block.style.background = `url(${balloonSvg}) center/cover no-repeat`; 

/* Append nodes to the DOM */
const app = document.querySelector('#root');
app.append(heading, p, img, block);