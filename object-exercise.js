console.log("========1=======");

function findMax(a, b) {
  // Өгөгдсөн хоёр тооны аль ихийг нь олно
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let x = 22;
let y = 44;
let maxValue = findMax(x, y);
console.log("Их тоо нь:", maxValue);

console.log("========2=======");

function findIndex(arr, num) {
  // Array доторх тоог хайх
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i; // Тухайн тоо олдвол индексийг буцаана
    }
  }
  return -1; // Тухайн тоо олдохгүй бол -1 буцаана
}

let array = [1, 2, 3, 4, 5];
let index = findIndex(array, 5);

console.log("Хайлт хийсэн тоо байгаа бол:", index);

numberToFind = 20;
index = findIndex(array, numberToFind);

console.log("Хайсан тоо байхгүй бол:", index); // Индекс нь: -1

console.log("========3=======");

function findTextindex(str, useg) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === useg) {
      return i;
    }
  }
  return -1;
}

let string = "iPhone";
let useg = "e";
let index2 = findTextindex(string, useg);

console.log("Хайсан үсэг нь", index2);

useg = "R";

index2 = findTextindex(string, useg);
console.log("Өөр үсэг оруулвал:", index2);

console.log("========4=======");

function findAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}

let array1 = [10, 20, 30, 40, 50];
let average = findAverage(array1);

console.log("Дундаж нь:", average);

console.log("========5=======");

function calculateSum(arri) {
  let sum = 0;

  for (let i = 0; i < arri.length; i++) {
    sum += arri[i];
  }
  return sum; // Нийлбэрийг буцаах
}

let array2 = [1, 2, 3, 4, 5];
let sum2 = calculateSum(array2);

console.log("Нийлбэр нь:", sum2);

console.log("========6=======");

function findFirstnumber(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i * i <= n; i + 2) {
     if (num % i ==== 0) }
}

console.log("========7=======");










console.log("========8=======");
