/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}


/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case: If the string is empty or we've reached the end, return an empty string
  if (index >= str.length) return "";

  // Recursive case: Include the current character and skip the next one
  return str[index] + everyOther(str, index + 2);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: A string of length 0 or 1 is a palindrome
  if (str.length <= 1) return true;

  // Compare the first and last characters
  if (str[0] !== str[str.length - 1]) return false;

  // Recursive case: Check the substring without the first and last characters
  return isPalindrome(str.slice(1, -1));
  

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base case: If we've gone through the whole array and not found the target
  if (idx === arr.length) return -1;

  // Check if the current element matches the target
  if (arr[idx] === target) return idx;

  // Recursive case: Check the rest of the array
  return findIndex(arr, target, idx + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string is empty or has one character, return it
  if (str.length <= 1) return str;

  // Recursive case: last character + reverse of the rest of the string
  return str[str.length - 1] + revString(str.slice(0, -1));

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (left > right) return -1; // Base case: target is not in the array

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid; // Found the target
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, right); // Search in the right half
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
