import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

// We create a component
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="" alt="Avatar"></img>
          <h1>Jozek<br />Hajduk</h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend engineer</h3>
          <div>@HajdukSanchez</div>
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    );
  }
}

export default Badge; // we export the component