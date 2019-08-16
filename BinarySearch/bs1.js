let iterativeBinarySearch = function(arr, tar) {
  let left = 0, right = arr.length, mid;

  while (left <= right) {
    mid = Math.floor((left + right)/2);
    console.log(mid);
    if (tar == arr[mid]) {
      console.log(`Target Found at index ${mid}`);
      return true;
    }
    if (tar > arr[mid]) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  console.log("Target Not In Proovided List");
  return false;
}

let recursiveBinarySearch = function(arr, tar, left, right) {
  if (left > right) {
    console.log("Target Non In Provided List");
    return false;
  }
  const mid = Math.floor((left + right)/2);
  if (tar == arr[mid]) {
    console.log(`Target Found at index ${mid}`);
    return true;
  }
  if (tar > arr[mid]) {
    recursiveBinarySearch(arr, tar, mid + 1, right);
  }
  else {
     recursiveBinarySearch(arr, tar, left, mid - 1);
  }
}

let arr = [ 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , 10];
// iterativeBinarySearch(arr, 10);
// iterativeBinarySearch(arr, -1)

recursiveBinarySearch(arr, 10, 0, arr.length - 1);
recursiveBinarySearch(arr, 3, 0, arr.length -1);