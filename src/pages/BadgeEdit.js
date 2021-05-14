import React, { Fragment } from 'react';

import './styles/BadgeNew.css';
import './styles/BadgeEdit.css';
import 'bootstrap/dist/css/bootstrap.css';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/platziconf-logo.svg';
import api from './api';
import PageLoading from '../components/PageLoading';


class BadgeEdit extends React.Component {

  state = {
    loading: false,
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
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
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
      await api.badges.update(this.props.match.params.id, this.state.form);
      this.setState({
        loading: false,
      });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const data = await api.badges.read(
        // MATCH is a property that props have
        // Id is the name that we pass to the component
        this.props.match.params.id
      );
      this.setState({
        loading: false,
        form: data
      });
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
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image" src={header} alt="logo" />
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
                title={'Edit Attendant'}
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

export default BadgeEdit;