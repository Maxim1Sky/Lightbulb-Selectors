// Write your code here
const output = document.querySelector("h3.subtitle");
let count = 0;

something.evenListener(function () {
  // your stuff

  count++;
  output.innerHTML = `You've clicked the lights ${count} times`;
});
