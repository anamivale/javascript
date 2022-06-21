console.log(
  "you can do addition(+) Subtraction(-) Multiplication(*) Division(/)"
)
// let sign = prompt("Enter your sign") can only work in a browser
//let a = prompt("Enter first number")
//let b = prompt("Enter second number")
let sign = "/"
const calc = (a, b) => {
  if (sign == "+") {
    let result = a + b
    return(result)
  } else if (sign == "-") {
    let result = a - b
    return(result)
  } else if (sign == "*") {
    let result = a * b
    return(result)
  } else if (sign == "/") {
    let result = a / b
    return(result)
  }
}
calc(1, 2)
