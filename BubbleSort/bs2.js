let bubbleSort = arr => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i ++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}
let arr = [99, 88, 777, 100, 45, 63, 11, 35, 34, 9, 100]
bubbleSort(arr)
console.log(arr);