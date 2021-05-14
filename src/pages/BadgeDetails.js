import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import confLogo from '../images/platziconf-logo.svg';
import api from './api';
import './styles/BadgeDetails.css';

export default class BadgeDetails extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const data = await api.badges.read(
        this.props.match.params.id
      );
      this.setState({
        loading: false,
        data: data
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
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    const badge = this.state.data;
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                twitter={badge.twitter}
                email={badge.email}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link className="btn btn-primary mb-3" to={`/badges/${badge.id}/edit`}>Edit</Link>
                </div>
                <div>
                  <Link className="btn btn-danger">Delete</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

