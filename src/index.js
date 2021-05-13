import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

// With this </> we can say that this is going to be an autoclose element
ReactDOM.render(<BadgeNew />, container);