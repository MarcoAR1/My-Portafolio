const { input } = require("./input/inputtripletsum.js");
const inputFixed = input.split("\n");
const a = inputFixed[1].split(" ").map((e) => parseInt(e));
const b = inputFixed[2].split(" ").map((e) => parseInt(e));
const c = inputFixed[3].split(" ").map((e) => parseInt(e));
function triplets(a, b, c) {
  console.time("hola");
  let counter = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  c.sort((a, b) => a - b);
  for (let x = 0; x < 100000000000; x += 1) {
    counter += x;
  }
  console.timeEnd("hola");
  return counter;
}

console.log(triplets(a, b, c));
