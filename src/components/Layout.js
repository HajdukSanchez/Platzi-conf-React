import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';

function Layout(props) { // We take the props by param when we use a functional component

  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
}

export default Layout;