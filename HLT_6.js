calc = (fNumber, sNumber) => {
  //create variable for result
  //take in operator and numbers from user
  const operator = "+";
  let result;
  //fNumber = parseInt(document.getElementById("fNumber").value);
  //sNumber = parseInt(document.getElementById("sNumber").value);
  switch (operator) {
    case "+":
      return fNumber + sNumber;
    case "/":
      return fNumber / sNumber;
    case "-":
      return fNumber - sNumber;
    case "*":
      return fNumber * sNumber;
    default:
      return "Error";
  }
};

console.log(calc(5, 3));

switch (operator) {
  case "+":
    result = fNumber + sNumber;
    break;
  case "-":
    result = fNumber - sNumber;
    break;
  case "*":
    result = fNumber * sNumber;
    break;
  case "/":
    result = fnumber1 / sNumber;
    break;
  default:
    result = "Error";
    break;
}
