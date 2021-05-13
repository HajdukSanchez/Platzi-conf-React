import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('app');

// With this </> we can say that this is going to be an autoclose element
ReactDOM.render(<Badge />, container);