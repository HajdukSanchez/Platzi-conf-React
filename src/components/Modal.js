import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

const Modal = (props) => {
  if (!props.isOpen) {
    return null; // If the modal is not open we dont return nothing
  }
  /* {ReactDOM.createPortal(__QUË__, __DONDE__)} */
  const view = (
    <div className="Modal">
      <div className="Modal__container">
        <button className="Modal__close-button" onClick={props.onClose}>X</button>
        {props.children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(view, document.getElementById('modal'));
}

export default Modal;