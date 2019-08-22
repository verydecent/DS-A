function returnMostOdd(arr) {
  const output = [];
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    console.log("iteration", arr[i]);
    console.log(hash[arr[i]])
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    }
    else hash[arr[i]] += 1;
  }
  const hashProp = Object.keys(hash);
  for (let j = 0; j < hashProp.length; j++) {
    const current = hashProp[j];
    if (hash[current] % 2 == 0) {
      console.log("%", hash[current] % 2);
      continue;
    }
    else output.push(hash[current])
  }
  console.log(output);
  return output;
}
var arr1 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 5, 6, 6, 6, 6, 7, 7, 7, 7];
returnMostOdd(arr1);