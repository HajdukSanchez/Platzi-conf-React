import React from 'react';

import './styles/BadgeNew.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

import header from '../images/badge-header.svg';


class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName="Jozek" lastName="Hajduk" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;