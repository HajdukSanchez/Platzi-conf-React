import React, { Component } from 'react';

class BadgeForm extends Component {

  // Here we inizialice the state
  // The state is like the fromGroup that creates the form controlers
  state = {
    // name: 'Jozek' // Initial value for NAME INPUT ELEMENT
  };

  // handleChange = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({ // This is a function for starge the information taht we want to save later
  //     // firstName: e.target.value
  //     [e.target.name]: e.target.value // With this way, every input is save it own info
  //   });
  // }

  handleClick = () => {
    // console.log('CLicked');
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Submit');
  // }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group mb-3">
            <label>First Name</label>
            <input className="form-control" onChange={this.props.onChange} type="text" name="firstName" value={this.props.formValues.firstName}></input>
          </div>
          <div className="form-group mb-3">
            <label>Last Name</label>
            <input className="form-control" onChange={this.props.onChange} type="text" name="lastName" value={this.props.formValues.lastName}></input>
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input className="form-control" onChange={this.props.onChange} type="email" name="email" value={this.props.formValues.email}></input>
          </div>
          <div className="form-group mb-3">
            <label>Job title</label>
            <input className="form-control" onChange={this.props.onChange} type="text" name="jobTitle" value={this.props.formValues.jobTitle}></input>
          </div>
          <div className="form-group mb-3">
            <label>twitter</label>
            <input className="form-control" onChange={this.props.onChange} type="text" name="twitter" value={this.props.formValues.twitter}></input>
          </div>
          <div className="form-group mb-3">
            <button className="btn btn-primary" onClick={this.handleClick} type="submit">Save</button>
          </div>
          <div className="form-group mb-3">
            {this.props.error && (
              <p className="text-danger">{this.props.error.message}</p>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;