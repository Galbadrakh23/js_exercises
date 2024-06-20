console.log("HomeWork");
// Exercise -1
let myAge = 30;
let Age;

if (myAge <= 25) {
  Age = "Below 25";
} else if (myAge >= 25) {
  Age = "Above 25";
}
console.log("Your age is", Age);

// Exercise -2
let n = 10;
let yes;

if (n % 2 === 0) {
  yes = "Тэгш";
} else if (n % 2 != 0) {
  yes = "Сондгой";
}
console.log("Өгөгдсөн тоо нь", yes);
// Exercise -3

const x = 12;
const y = 30;
const z = 45;

let High;

if (x >= y && x >= z) {
  High = x;
} else if (y >= x && y >= z) {
  High = y;
} else {
  High = z;
}
console.log("Хамгийн их тоо нь", High);
// Exercise -4

let n1 = 12;
let n2 = 30;
let n3 = 45;

if (n1 <= n2 && n1 <= n3 && n1) {
  console.log(n1);
} else if (n2 <= n1 && n2 <= n3 && n2) {
  console.log(n2);
} else console.log("Хамгийн бага тоо", n3);
// Exercise -5

let month = "February";
let season;
if (month === "February") {
  season = "Spring";
} else {
  season = "Unknown";
}
console.log("Таны оруулсан Улирал :", season);

// Exercise -6
// let numbers = [85, 75, 96, 69];

// let numbersAbove80 = numbers.filter((number) => number > 80);

// numbersAbove80.forEach((number) => console.log(number));
// Exercise -6

const number1 = 85;
const number2 = 75;
const number3 = 96;
const number4 = 69;

let sum = 0;

if (number1 > 80) {
  sum = sum + number1; // sum += number1
}
if (number2 > 80) {
  sum = sum + number2; // sum += number2
}
if (number3 > 80) {
  sum = sum + number3; // sum += number3
}
if (number4 > 80) {
  sum = sum + number4; // sum += number4
}
console.log("Нийлбэр", sum);

// Exercise -7

const numb1 = 3;
const numb2 = 7;
const numb3 = 2;
const numb4 = 4;

let divider = 1;

if (numb1 < 7) {
  divider *= numb1;
}
if (numb2 < 7) {
  divider *= numb2;
}
if (numb3 < 7) {
  divider *= numb3;
}
if (numb4 < 7) {
  divider *= numb4;
}
console.log("Below", divider);
// Exercise -8

const bat = 67;
const ochir = 59;
// Student Бат
if (bat < 60) {
  console.log("Сурагч Батаа: Маш Муу ", bat);
} else if (bat >= 60 && bat < 70) {
  console.log("Сурагч Батаа: Хангалттай", bat);
} else if (bat >= 70 && bat < 80) {
  console.log("Сурагч Батаа: Дунд", bat);
} else if (bat >= 80 && bat < 90) {
  console.log("Сурагч Батаа: Сайн", bat);
} else if (bat >= 90 && bat <= 100) {
  console.log("Сурагч Батаа: Маш Сайн", bat);
} else {
  console.log("Сурагч Батаа: Not Qualified", bat);
}

// Сурагч Очир
if (ochir < 60) {
  console.log("Сурагч Очир: Маш Муу", ochir);
} else if (ochir >= 60 && ochir < 70) {
  console.log("Сурагч Очир: Хангалттай", ochir);
} else if (ochir >= 70 && ochir < 80) {
  console.log("Сурагч Очир: Дунд", ochir);
} else if (ochir >= 80 && ochir < 90) {
  console.log("Сурагч Очир: Сайн", ochir);
} else if (ochir >= 90 && ochir <= 100) {
  console.log("Сурагч Очир: Маш Сайн", ochir);
} else {
  console.log("Сурагч Очир: Тэнцээгүй", ochir);
}
// Exercise -9
const num1 = 120;
const num2 = 33;
const num3 = 10;
const num4 = 12;

let lower = 0;
