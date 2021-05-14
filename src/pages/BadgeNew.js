import React, { Fragment } from 'react';

import './styles/BadgeNew.css';
import 'bootstrap/dist/css/bootstrap.css';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/platziconf-logo.svg';
import api from './api';
import PageLoading from '../components/PageLoading';


class BadgeNew extends React.Component {

  state = {
    loading: false, // Is going to represent the information send
    error: null,
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null
    });
    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      });
      this.props.history.push('/badges'); // If everithing is ok, we redirect the user to badges
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.form.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;