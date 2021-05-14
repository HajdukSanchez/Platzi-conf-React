import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './global.css';

import App from './components/App'


const container = document.getElementById('app');

// With this </> we can say that this is going to be an autoclose element
ReactDOM.render(<App />, container);