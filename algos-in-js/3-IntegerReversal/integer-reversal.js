const integerReversal = function(int) {
  const reversed = int.toString().split("").reverse().join("");
  return Math.sign(int) * parseInt(reversed);
}

console.log(integerReversal(-10000));

function reverseNumber(number) {
  var revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}