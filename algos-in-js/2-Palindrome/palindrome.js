const isPalindrome = (str) => {
  if (str == str.split("").reverse().join("")) return true;
}
console.log(isPalindrome("racecar"));

const isPalindrome2 = str => {
  let potentialPalindrome = "";
  for (let char of str) {
    potentialPalindrome = char + potentialPalindrome;
  }
  if (str == potentialPalindrome) return true;
  else return false;
}

console.log(isPalindrome2("level"));
console.log(isPalindrome2("levels"));
console.log(isPalindrome2("gratitude"));
console.log(isPalindrome2("eye"));

const isPalindrome3  = str => {
  let palindrome = "";
  for (let i = 0; i < str.length; i++) {
    palindrome = str[i] + palindrome;
  }
  if (str == palindrome) return true;
  else return false;
}

console.log(isPalindrome3("level"));
console.log(isPalindrome3("levels"));
console.log(isPalindrome3("gratitude"));
console.log(isPalindrome3("eye"));