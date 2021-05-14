import React, { Fragment } from 'react';
import './styles/BadgeDetails.css';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import confLogo from '../images/platziconf-logo.svg';


export default function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <Fragment>
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
    </Fragment>
  );
}

