import React from "react";

var divStyle = {
  backgroundImage: 'url("https://i.imgur.com/qkdpN.jpg")',
  height: "500px",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  position: "relative"
};
function About() {
  return (
    <div className="container">
      <div className="hero text-center" style={divStyle}>
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>

        <h1>Welcome to Pupster</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>
      </div>
    </div>
  );
}

export default About;
