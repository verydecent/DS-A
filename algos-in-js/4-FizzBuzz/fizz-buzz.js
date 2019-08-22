// fizz buzz

const fizzBuzz = (arr) => {
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] % 2 == 0) {
        console.log(`Fizz! ${arr[i]}`);
      }
      else if (arr[i] % 3 == 0) {
        console.log(`Buzz! ${arr[i]}`);
      }
      else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
        console.log(`Fizz! Buzz! ${arr[i]}`)
      }
      else {
        console.log("NA");
      }
    }
}

const arr1 = [];
for (let i = 0; i < 30; i++) {
  arr1[i] = i;
}

const fizzBuzz2 = (arr) => {
  for (let num of arr) {
    if (num % 2 == 0) {
      console.log(`Fizz ${num}`);
    }
    else if (num % 3 == 0) {
      console.log(`Buzz ${num}`);
    }
    else if (num % 2 == 0 && num % 3 == 0) {
      console.log(`Fizz! Buzz! ${num}`);
    }
    else {
      console.log("NA");
    }
  }
}

fizzBuzz2(arr1); 