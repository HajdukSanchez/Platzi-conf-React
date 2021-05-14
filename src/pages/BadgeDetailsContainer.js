import React, { Component, Fragment } from 'react';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import api from './api';
import BadgeDetails from './BadgeDetails';

export default class BadgeDetailsConatiner extends Component {

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
    return <BadgeDetails badge={this.state.data} />;
  }
}

