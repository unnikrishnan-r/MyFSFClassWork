import React from "react";
import Math from "./Math.js"

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <div>
      <p>19 + 341 = <Math num1={19} num2={341} operator="+" /></p>
      <p>42 - 17 = <Math num1={42} num2={17} operator="-" /></p>
      <p>42 * 17 = <Math num1={42} num2={17} operator="*" /></p>
      <p>96 / 4 = <Math num1={96} num2={4} operator="/" /></p>
    </div>
  );
}

export default Calculator;
