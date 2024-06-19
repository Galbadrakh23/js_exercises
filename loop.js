// Ex-1
for (let count = 0; count <= 10; count++) {
  console.log("Натурал тоо", count);
}

// Ex-2
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    // Check if the number is not divisible by 2
    console.log("Сондгой", i);
  }
}

// Ex-3
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    // Check if the number is not divisible by 2
    console.log("Тэгш", i);
  }
}
// Ex-4
let sum = 0;
let too = 0;
for (let i = 1; i <= 100; i++) {
  too++;
  sum = sum + too;
}
console.log("SUM:", sum);
// Ex-5

let n = 0;
let m = 0;
for (let i = 1; i <= 101; i++) {
  m++;
  n = n + m;
}
console.log("SUM:", n);
// Ex-6
let n1 = 4;
let result = 1;

for (let i = 1; i <= n1; i++) {
  result *= i;
}
console.log("SUM:", result);

// Ex-7
let number = 123;
let digit = 0;
let digitsum = 0;

while (number !== 0) {
  digit = number % 10;
  number = number - digit;
  number = number / 10;
  digitsum = digitsum + digit;
}
console.log("Digit Sum", digitsum);
// Ex-8
