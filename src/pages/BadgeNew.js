import React from 'react';

import './styles/BadgeNew.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/badge-header.svg';


class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: '',
      email: '',
    }
  }

  handleChange = (e) => {
    // We create a copy of form for prevent overwriting
    // const nextForm = this.state.form;
    // nextForm[e.target.className.name] = e.target.value;
    // Those elements are going to get in the BADGEFORM
    this.setState({
      form: {
        // form: nextForm
        // Another way to prevent the overwriting in the form
        ...this.state.form, // We crate a copy
        [e.target.name]: e.target.value, // We add a new value overwriting this specific value
      }
    });
  }

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
              <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} email={this.state.form.email} avatarUrl="http:\/\/1.gravatar.com\/avatar\/b8f08ff3f8554eb4714b95e7aeaf3286" />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;