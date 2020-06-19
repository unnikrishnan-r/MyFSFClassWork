import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Math(props) {
  console.log(props);
  let result = 0;
  switch (props.operator) {
    case "+":
      result = props.num1 + props.num2;
      break;
    case "-":
      result = props.num1 - props.num2;
      break;
    case "*":
      result = props.num1 * props.num2;
      break;
    case "/":
      result = props.num1 / props.num2;
      break;
  }
  return <span>{result}</span>;
}
export default Math;
