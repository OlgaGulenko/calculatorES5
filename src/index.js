var React = require('react');
var ReactDOM = require('react-dom');
var Calculator = require('./components/Calculator');
// var createStore, applyMiddleware  = require('redux');


// React.render(
//     <Calculator />,
//   document.getElementById('root')
// );
function run() {
  ReactDOM.render(
  	<Calculator />,
  	document.getElementById("calculator")
  );
}
var loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
