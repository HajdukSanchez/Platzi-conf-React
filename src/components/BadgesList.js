import React, { Component, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './styles/BadgesList.css';
class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  // Using a react hook for filter the data
  const [query, setQuery] = useState('');
  const [filterResults, setFilterResults] = useState(badges);
  useMemo(() => {
    const result = badges.filter(badge => `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase()));
    setFilterResults(result);
  }, [badges, query]);
  return { query, setQuery, filterResults }
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filterResults } = useSearchBadges(badges)
  // The first way to filter the data
  /* const filterBadges = badges.filter(badge => {
    return `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  }); */
  if (filterResults.length === 0) {
    return (
      <div>
        <div className="form-group mb-3">
          <label className="mb-2">Filter badges</label>
          <input type="text" className="form-control" value={query} onChange={e => {
            setQuery(e.target.value)
          }} />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group mb-3">
        <label className="mb-2">Filter badges</label>
        <input type="text" className="form-control" value={query} onChange={e => {
          setQuery(e.target.value)
        }} />
      </div>
      <ul className="list-unstyled">
        {filterResults.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;