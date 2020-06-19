import React, { Component } from "react";
import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random";

var divStyle = {
  style: "opacity: 1"
};

class Discover extends Component {
  state = {
    randomImageUrl: ""
  };

  componentDidMount() {
    return axios.get(BASEURL).then(response => {
      console.log(response.data);
      this.setState({
        randomImageUrl: response.data.message
      });
      // console.log(imgUrl)
      // console.log(this.state.randomImageUrl)
      // imgUrl = this.state.randomImageUrl
      // console.log(imgUrl)
      // imgUrl ="xyz"
      // console.log(imageStyle)
    });
  }
  render() {
    var imageStyle = {
      backgroundImage: `url(${this.state.randomImageUrl})`,
      backgroundSize: "cover",
      height: "500px",
      width: "500px",
      backgroundPosition: "50%"
      // backgroundClip: "content-box"


      
    };

    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <div className="card" style={imageStyle}>
          <button
            className="card-btn pass"
            datavalue="pass"
            style={divStyle}
          > THUMBS DOWN</button>
          <button
            className="card-btn pick"
            datavalue="pick"
            style={divStyle}
          >THUMBS UP</button>
        </div>
      </div>
    );
  }
}

export default Discover;
