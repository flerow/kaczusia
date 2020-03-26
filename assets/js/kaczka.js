import React from 'react';
import Picture from "./KaczkaPageComponents/Picture";
import ReactDOM from 'react-dom';

console.log('dfddd');
const container = document.getElementById('kaczka-entry');
const {
  isKaczka
} = container.dataset;

ReactDOM.render(
  <Picture isKaczka={isKaczka} />,
  container
);
