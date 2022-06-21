console.log(
  "you can do addition(+) Subtraction(-) Multiplication(*) Division(/)"
)
// let sign = prompt("Enter your sign") can oly work in a browser
let sign = "/"
const calc = (a, b) => {
  if (sign == "+") {
    let result = a + b
    console.log(result)
  } else if (sign == "-") {
    let result = a - b
    console.log(result)
  } else if (sign == "*") {
    let result = a * b
    console.log(result)
  } else if (sign == "/") {
    let result = a / b
    console.log(result)
  }
}
calc(1, 2)
