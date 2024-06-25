// // console.log("Working");

// // function change() {
// //   document.getElementById("box").style.backgroundColor = "Yellow";

// //   console.log("Button clicked");
// // }

// // function secondChange() {
// //   document.getElementById("box").style.backgroundColor = "Black";
// // }
// // const btnEl = document.getElementById("btn");

// // btnEl.addEventListener("click", change);

// const boxEL = document.getElementsByClassName("box")[0];
// const btnEL = document.getElementsByClassName("btn")[0];
// console.log(boxEL);
// console.log(btnEL);

// const colors = ["green", "yellow", "grey"];
// let i = 0;

// function generateColor() {
//   const rColor = Math.floor(Math.random() * 256);
//   const gColor = Math.floor(Math.random() * 256);
//   const bColor = Math.floor(Math.random() * 256);
//   //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")";
//   return `rgb(${rColor},${gColor},${bColor})`; // Template Script
// }

// function changeBackroundColor() {
//   console.log("changed");

//   boxEL.style.backgroundColor = generateColor();

//   //   i++;
//   //   if (i === colors.length) {
//   //     i = 0;
//   //   }
// }

// btnEL.addEventListener("click", changeBackroundColor);

// =================HM==========================

const insideBoxes = document.getElementsByClassName("inside-box");

console.log(insideBoxes);

const btnEL = document.getElementsByClassName("btn")[0];

function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  return `rgb(${rColor},${gColor},${bColor})`;
}

// Хайрцаг тус бүрийн өнгийг солих

function changeBackgroundColor() {
  console.log("changed");
  for (let i = 0; i < insideBoxes.length; i++) {
    insideBoxes[i].style.backgroundColor = generateColor();
  }
}

btnEL.addEventListener("click", changeBackgroundColor);

// function generateBoxes(boxEL) {
//   console.log("boxes created");
// }

// generateBoxes();

// document.querySelector("btn2").addEventListener("click", generateBoxes){
//   const container2 = document.querySelector('.container2');
//   const newBox = document.createElement('div');
//   newBox.classList.add('inside-box');
//   container2.appendChild(newBox);
// };

// addbox

// const addBtn = document.getElementsByClassName("btn2");
// console.log(addBtn);

// addBtn.addEventListener("click", function () {
//   // ------- ------------//
//   const newBox = document.createElement("div");
//   newBox.className = "box";
//   const parent = document.getElementsByClassName("box2"[0]);
//   parent.appentChild(newBox);
// });

// audio

const playBtn = document.getElementsByClassName("playBtn");
playBtn.addEventListener("click", () => {
  // play song
  const audio = document.getElementTagName("audio"[0]);
  audio.play();
  console.log("AUD", audio);
});
