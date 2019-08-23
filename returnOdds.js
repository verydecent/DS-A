function returnOdds(arr) {
  const hash = {};
  const outputArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] += 1;
    }
    else {
      hash[arr[i]] = 1;
    }
  }
  const hashProp = Object.keys(hash);
  for (var j = 0; j < hashProp.length; j++) {
    const current = [hashProp[j]];
    console.log(hash[current]);
    if (hash[current] % 2 == 0) {
      continue;
    }
    else {
      outputArr.push(current);
    }
  }
  console.log("final output", outputArr);
  return outputArr;
}

var arr1 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 5, 6, 6, 6, 6, 7, 7, 7, 7];
// Evens
2, 2 // 2
7, 7, 7, 7 // 4
6, 6, 6, 6 // 4
// Odds
3, 3, 3, 3, 3 // 5
1, 1, 1 // 3
5 // 1

var arr2 = [4, 4, 4, 22, 22, 22, 34, 34, 34, 99, 99, 100, 100, 87, 87, 87, 60, 60];
// Evens
100, 100 // 2
99, 99 // 2
60, 60 // 2

// Odds
87, 87, 87 // 3
34, 34, 34 // 3
22, 22, 22 // 3
4, 4, 4 // 3

returnOdds(arr1);