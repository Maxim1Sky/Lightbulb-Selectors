// Write your code here
const output = document.querySelector("h3.subtitle");
let count = 0;

// const bulb1 = document.querySelector("#lightbulb1");
// const bulb2 = document.querySelector("#lightbulb2");
// const bulb3 = document.querySelector("#lightbulb3");

// bulb1.addEventListener("click", function () {
//   this.classList.toggle("active");

//   count++;
//   output.innerHTML = `You've clicked the lights ${count} times`;
// });

// bulb2.addEventListener("click", function () {
//   this.classList.toggle("active");

//   count++;
//   output.innerHTML = `You've clicked the lights ${count} times`;
// });

// bulb3.addEventListener("click", function () {
//   this.classList.toggle("active");

//   count++;
//   output.innerHTML = `You've clicked the lights ${count} times`;
// });

const lightbulbs = document.querySelectorAll(".lightbulb");

lightbulbs.forEach(function (bulb) {
  bulb.addEventListener("click", function () {
    this.classList.toggle("active");
    count++;
    output.innerHTML = `You've clicked the lights ${count} times`;
  });
});
