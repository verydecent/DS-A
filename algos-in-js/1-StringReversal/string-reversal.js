// With built in methods
function stringReversal1(str) {
  // let reversed = str.split("").reverse().join("");
  // return reversed;
  return str.split("").reverse().join("");
}

console.log(stringReversal1("wonjae"));
console.log(stringReversal1("minji"));

function stringReversal2(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

console.log(stringReversal2("wonjae"));
console.log(stringReversal2("minji"));