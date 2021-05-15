import React, { Fragment, useState } from 'react';
import './styles/BadgeDetails.css';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import confLogo from '../images/platziconf-logo.svg';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) { //Personalized HOOK
  const [count, setCount] = useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}


export default function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);
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
                {/* <button className="btn btn-primary" onClick={() => {
                  setCount(count + 1);
                }}>Increase count: {count}</button> */}
                <Link className="btn btn-primary mb-3" to={`/badges/${badge.id}/edit`}>Edit</Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onOpen={props.onOpenModal} onDeleteBadge={props.onDeleteBadge} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

