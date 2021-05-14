import React, { Component } from 'react';

class BadgeForm extends Component {

  // Here we inizialice the state
  // The state is like the fromGroup that creates the form controlers
  state = {
    name: 'Jozek'
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ // This is a function for starge the information taht we want to save later
      // firstName: e.target.value
      [e.target.name]: e.target.value // With this way, every input is save it own info
    });
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
          <div className="form-group mb-3">
            <label>First Name</label>
            <input className="form-control" onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
          </div>
          <div className="form-group mb-3">
            <label>Last Name</label>
            <input className="form-control" onChange={this.handleChange} type="text" name="lastname" value={this.state.lastname}></input>
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input className="form-control" onChange={this.handleChange} type="email" name="email" value={this.state.email}></input>
          </div>
          <div className="form-group mb-3">
            <label>Job title</label>
            <input className="form-control" onChange={this.handleChange} type="text" name="jobtitle" value={this.state.jobTitle}></input>
          </div>
          <div className="form-group mb-3">
            <label>twitter</label>
            <input className="form-control" onChange={this.handleChange} type="text" name="twitter" value={this.state.twitter}></input>
          </div>
          <div className="form-group mb-3">
            <button className="btn btn-primary" onClick={this.handleClick} type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;