// Exercise -1-
function addNumber(array, number) {
  array.push(number);
  return array;
}

const inputArray = [1, 2, 4];
const numberAdd = 5;

const resultArray = addNumber(inputArray, numberAdd);
console.log(resultArray);

// Exercise -2-

function createArray(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
}

const emptyArray = [];
const numberToAdd = 5;

const createdArray = createArray(emptyArray, numberToAdd);
console.log(createdArray);

// // Exercise -3-
// function sumOfTwoNumbers() {
//   let number1 = prompt("Та эхний тоог оруулна уу:");
//   let number2 = prompt("Та хоёрдугаар тоог оруулна уу:");

//   number1 = Number(number1);
//   number2 = Number(number2);

//   let sum = number1 + number2;
//   console.log("Оруулсан тоонуудын нийлбэр:", sum);
// }

// let result = sumOfTwoNumbers();

// function avrOfTwoNumbers() {
//   let number3 = prompt("Та эхний тоог оруулна уу:");
//   let number4 = prompt("Та хоёрдугаар тоог оруулна уу:");

//   number3 = Number(number3);
//   number4 = Number(number4);

//   let avr = (number3 + number4) / 2;

//   console.log("Оруулсан тоонуудын дундаж:", avr);
// }

// let result2 = avrOfTwoNumbers();

// // Exercise -4-

// let utag = prompt("Та дурын 2 тоог таслал бичиж оруулна уу.");

// function promptSum(promptUtag) {
//   let toArray = promptUtag.split(",");
//   let sum = 0;
//   for (let i = 0; i < toArray.length; i++) {
//     sum = sum + Number(toArray[i]);
//   }
//   return sum;
// }

// let result = promptSum(utag);
// console.log(result);

// Exercise -4-

let words = "the quick brown fox";

function letterToUppercase(con) {
  let letter = words.split(" ");
  console.log(letter);
  const firstElement = letter.shift();
  console.log(letter);
  console.log(firstElement);

  for (let i = 0; i < words.length; i++) {}
}
let result = letterToUppercase(words);

// Exercise -5-
// input: ['hello', 'world', 'javascript', 'array']
// output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']

function reverseText(text) {
  return text.split("").reverse().join("");
}

const textArr = ["Hello", "World", "Javascript", "Array"];

function reverseArray(putArray) {
  let r = [];
  for (let i = 0; i < putArray.length; i++) {
    r.push(reverseText(putArray[i]));
  }
  return r;
}

reverseArray(textArr);
