// Exercise 1

function minMaxAvg(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
    sum += num;
  }
  const avg = sum / arr.length;
  return { min, max, avg };
}

const inputArray = [1, 2, 3, 4, 5];
const result = minMaxAvg(inputArray);
console.log(result);

// Exercise 2

const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];

function totalSales(orders) {
  let total = 0;
  for (let order of orders) {
    for (let item of order.items) {
      total += item.price;
    }
  }
  return total;
}
const total = totalSales(orders);
console.log(total);

// Exercise 4

const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};

function highestPay(companyData) {
  let workers = companyData.employees;
  let maxSalary = workers.salary;
  let maxSalaryName = "";
  for (let i = 0; i < workers.length; i++) {
    if (workers[i].salary > maxSalary) {
      maxSalaryName = workers[i].salary;
      maxSalary = workers[i].name;
    }
  }
  return maxSalaryName;
}

let name = highestPay(company);
console.log(name);
