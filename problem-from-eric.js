const reduceArray = (arr) => {
  let updatedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      updatedArr.push(arr[i]);
    }
    else {
      updatedArr = updatedArr.concat(reduceArray(arr[i]));
    }
  }
  return updatedArr;
}

const arr1 = [1, 2, 3, [4]];
const arr2 = [1, [2], 3, [4]];
const arr3 = [1, [[2]], 3, [4], [[[5, 6], 7], 9]];
const arr4 = [1, 2, 3, [[[4, 5, 6]]]];
console.log(reduceArray(arr1));
console.log(reduceArray(arr2));
console.log(reduceArray(arr3));
console.log(reduceArray(arr4));