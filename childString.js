const string1 =
  "HARRY";

const string2 =
  "SALLY";

function commonChild(s1, s2) {
  const arr = [Array(s1.length + 1).fill(0)];
  const s1A = [...s1];
  for (let i = 0; i < s1A.length; i += 1) {
    arr[i + 1] = [0];
    const s2A = [...s2];
    for (let x = 0; x < s2A.length; x += 1) {
      arr[i + 1][x + 1] =
        s1A[i] === s2A[x]
          ? arr[i][x] + 1
          : Math.max(arr[i + 1][x], arr[i][x + 1]);
    }
  }
  console.log(arr)
  return arr[s1.length][s2.length];
}

console.log(commonChild(string1, string2));
