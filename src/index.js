// The way that we create an element with jS pure
// const element = document.createElement('h1'); // we create a document element
// element.innerText = 'Hello, Platzi Badges'; // We add the text to our created element

// const container = document.getElementById('app'); // We take the pattern element

// container.appendChild(element); // We add the element into our HTML element


// The way that we create an element with React
import React from 'react';
import ReactDOM from 'react-dom';

// The first one is the type of element, the second are the properties and the third one are the elements inside
// const element1 = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Hola soy el children'
// ); // Element with CreateElement
// const element = <h1>Hello, Platzi badges</h1>; // Element with JXS
const container = document.getElementById('app');

// ReactDOM.render(__QUE__, __DONDE__);
// Que es el elemento, donde es el contenedor que lo va a poseer.
// ReactDOM.render(element, container);
// ReactDOM.render(element1, container);

// const name = 'Jozek';
// const jsx = <h1>Hola soy {name}</h1>
// ReactDOM.render(jsx, container);

const sum = 3 + 3;
const jsx = <h1>Hola soy {sum}</h1>
ReactDOM.render(jsx, container);