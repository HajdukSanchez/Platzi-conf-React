// The way that we create an element with jS pure
// const element = document.createElement('h1'); // we create a document element
// element.innerText = 'Hello, Platzi Badges'; // We add the text to our created element

// const container = document.getElementById('app'); // We take the pattern element

// container.appendChild(element); // We add the element into our HTML element


// The way that we create an element with React
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi badges</h1>; // We craete an element and store it into an variable
const container = document.getElementById('app');

// ReactDOM.render(__QUE__, __DONDE__);
// Que es el elemento, donde es el contenedor que lo va a poseer.
ReactDOM.render(element, container);

