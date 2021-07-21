const value = require("./bugedinpud.js");
const k = value.k;
const arr = value.arr;
const expeted = value.expeted;
console.log(pairs(k, arr) === expeted);
function pairs(k, arr) {
  let counter = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i += 1) {
    const positionSplice = arr.findIndex((v) => Math.abs(v - arr[i]) === k, i);
    if (positionSplice === -1) {
      /* break; */
    } else {
      counter += 1;
    }
    /* const DiffCounter = [...arr].splice(i, positionSplice);
    for (let x = 0; x < DiffCounter.length - 2; x += 1) {
      if (Math.abs(DiffCounter[x] - DiffCounter[x + 1]) === k) {
        counter + 1;
      }
    } */
  }

  return counter;
}
