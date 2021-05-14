import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';


const container = document.getElementById('app');

// With this </> we can say that this is going to be an autoclose element
ReactDOM.render(<Badges />, container);