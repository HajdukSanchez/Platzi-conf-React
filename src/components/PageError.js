import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError"><span>❌</span>{props.error.message}<span>😱</span></div>;
}

export default PageError;