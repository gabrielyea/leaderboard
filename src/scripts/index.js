import _ from 'lodash';
import printMe from './print.js';
import '../scss/main.scss';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());