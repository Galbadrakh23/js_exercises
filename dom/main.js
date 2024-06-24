// console.log("Working");

// function change() {
//   document.getElementById("box").style.backgroundColor = "Yellow";

//   console.log("Button clicked");
// }

// function secondChange() {
//   document.getElementById("box").style.backgroundColor = "Black";
// }
// const btnEl = document.getElementById("btn");

// btnEl.addEventListener("click", change);

const boxEL = document.getElementsByClassName("box")[0];
const btnEL = document.getElementsByClassName("btn")[0];
console.log(boxEL);
console.log(btnEL);

const colors = ["green", "yellow", "grey"];
let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")";
  return `rgb(${rColor},${gColor},${bColor})`; // Template Script
}

function changeBackroundColor() {
  console.log("changed");

  boxEL.style.backgroundColor = generateColor();

  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}

btnEL.addEventListener("click", changeBackroundColor);
