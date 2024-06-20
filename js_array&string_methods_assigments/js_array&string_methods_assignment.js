// Exercise -1-
function addNumber(array, number) {
  array.push(number);
  return array;
}

const inputArray = [1, 2, 4];
const numberToAdd = 5;

const resultArray = addNumber(inputArray, numberToAdd);
console.log(resultArray);

// Exercise -2-

function createArray(arr, n) {
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

const emptyArray = [];
const numberToFill = 10;

const createdArray = createArray(emptyArray, numberToFill);
console.log(createdArray);

// Exercise -3-
function sumOfTwoNumbers() {
  let number1 = prompt("Та эхний тоог оруулна уу:");
  let number2 = prompt("Та хоёрдугаар тоог оруулна уу:");

  number1 = Number(number1);
  number2 = Number(number2);

  let sum = number1 + number2;
  console.log("Оруулсан тоонуудын нийлбэр:", sum);
}

let result = sumOfTwoNumbers();

function avrOfTwoNumbers() {
  let number3 = prompt("Та эхний тоог оруулна уу:");
  let number4 = prompt("Та хоёрдугаар тоог оруулна уу:");

  number3 = Number(number3);
  number4 = Number(number4);

  let avr = (number3 + number4) / 2;

  console.log("Оруулсан тоонуудын дундаж:", avr);
}

let result2 = avrOfTwoNumbers();
