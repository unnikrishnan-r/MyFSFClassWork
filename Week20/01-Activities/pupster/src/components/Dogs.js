import React, { Component } from "react";

class Dogs extends Component {
  render() {
    return (
        <li class="list-group-item">
          <img alt="Dog" src={this.props.imageurl} class="img-responsive" />
        </li>
    );
  }
}

export default Dogs;
