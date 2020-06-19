import React from "react";

let name = "Unni"
let numberOfLetterInName = name.length;
let thoughtsAboutReact = "Still figuring out";
let add =  (num1, num2) =>  num1 + num2 ;
let multiply =  (num1, num2) =>  num1 * num2 ;

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {numberOfLetterInName} letters</h2>
          <h2>I think React {thoughtsAboutReact}</h2>
          <h2> Adding  2 numbers {add(1,2)}</h2>
          <h2> Multiplying  2 numbers {multiply(4,2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
