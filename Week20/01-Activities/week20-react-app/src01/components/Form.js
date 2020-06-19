import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    alert(`Hello ${this.state.username}`);
    this.setState({
      username:"",
      password:""
    })
  }
  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        {/* <p>Password: {this.state.password}</p> */}
        <input
          type="text"
          placeholder="Username"
          name="username"
          value = {this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value = {this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
