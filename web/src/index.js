// @flow

const square = require('./square');

const mainDiv = document.getElementById('main-div');
if (mainDiv) {
  mainDiv.innerHTML = 'webpack-middleware is working!';
}

// function square(n) {
//   return n * n;
// }

square.square("2");
