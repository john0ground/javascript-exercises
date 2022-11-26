const add = (a, b) => a + b;
  
const subtract = (a, b) => a - b;
  
const sum = (array) => array.reduce((total, num) => total + num, 0);
  
const multiply = (array) => array.reduce((total, num) => total * num);

const power = (a, b) => a ** b;
  
const factorial = (num) => {
    if (num == 0) {
        return 1;
    }

    let multiplied = 1;
    for(let i = num; i > 0; i--) {
        multiplied *= i;
    }
    return multiplied;
}
  
  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };
  