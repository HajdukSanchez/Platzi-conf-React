import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('app');

// With this </> we can say that this is going to be an autoclose element
ReactDOM.render(<Badge firstName="Jozek" lastName="Hajduk" avatarUrl="http:\/\/1.gravatar.com\/avatar\/b8f08ff3f8554eb4714b95e7aeaf3286" jobTitle="Frontend" twitter="HajdukSanchez" />, container);