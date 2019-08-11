switch (process.argv[2]) {
  case "add":
    console.log("Going to perform addition" , parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
    break;
  case "subtract":
    console.log("Going to perform subtraction", parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
    break;
  case "multiply":
    console.log("Going to perform multiplication", parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
    break;
  case "divide":
    console.log("Going to perform Division", parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
    break;
  case "remainder":
    console.log("Going to perform remainder", parseFloat(process.argv[3]) % parseFloat(process.argv[4]));
    break;
  default:
    console.log("invalid operation");
}
