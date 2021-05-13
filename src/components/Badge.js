import React from 'react';
import confLogo from '../images/badge-header.svg';

// We create a component
class Badge extends React.Component {
  render() {
    return <div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia"></img>
      </div>
      <div>
        <img src="" alt="Avatar"></img>
        <h1>Jozek<br />Hajduk</h1>
      </div>
      <div>
        <p>Frontend engineer</p>
        <p>@HajdukSanchez</p>
      </div>
      <div>
        #platziconf
      </div>
    </div>;
  }
}

export default Badge; // we export the component