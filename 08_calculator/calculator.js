const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sumResult = 0;
  const sumNumbers = array;
  
  for (const sumArray of sumNumbers) {
    sumResult += sumArray;
  }

  return sumResult;
};

const multiply = function(array) {
  let product = 1;
  const factors = array;

  for (const mulArray of factors) {
    product *= mulArray;
  }

  return product;
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {
  let facResult = 1;
	for (i=num; i >= 1; i--) {
    facResult *= i;
  }

  return facResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
