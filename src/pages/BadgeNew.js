import React from 'react';

import './styles/BadgeNew.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

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
            <div className="col-6">
              <Badge firstName="Jozek" lastName="Hajduk" twitter="HajdukSanchez" avatarUrl="http:\/\/1.gravatar.com\/avatar\/b8f08ff3f8554eb4714b95e7aeaf3286" jobTitle="Web Developer" />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;