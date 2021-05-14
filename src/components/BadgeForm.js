import React, { Component } from 'react';

class BadgeForm extends Component {

  handleChange = (e) => {
    console.log(e.target.value);
  }

  handleClick = () => {
    console.log('CLicked');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input className="form-control" onChange={this.handleChange} type="text" name="name"></input>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.handleClick} type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;