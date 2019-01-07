const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  const reverseArr = str.split("").reverse();
  return reverseArr.join("");
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  const uniqueArr = [];
  for (item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length !== arr2.length) {
    return -1;
  }

  const zipArr = [];

  for (let i = 0; i < arr1.length; i++) {
    zipArr.push([arr1[i], arr2[i]]);
  }

  return zipArr;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  const arr1 = [];
  const arr2 = [];

  for (item of arr) {
    arr1.push(item[0]);
    arr2.push(item[1]);
  }

  return [arr1, arr2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const stringArr = [];
  for (let i = 0; i < str.length; i++) {
    stringArr[(i + num) % str.length] = str[i];
  }

  return stringArr.join("");
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let numberToWords = require("number-to-words");

  const today = new Date();
  const month = today.toLocaleString("en-us", { month: "long" });
  const hour = today.getHours();
  const hourWord = numberToWords.toWords(hour);
  const minutes = numberToWords.toWords(today.getMinutes());
  let moment = "";

  if (hour >= 6 && hour < 12) {
    moment = "morning";
  } else if (hour >= 12 && hour <= 18) {
    moment = "afternoon";
  } else if (hour >= 18 && hour <= 24) {
    moment = "evening";
  } else if (hour >= 0 && hour <= 6) {
    moment = "night";
  }
  return `Today's date is ${month} ${today.getDate()}th, ${today.getFullYear()}. It is ${hourWord} ${minutes} in the ${moment}.`;
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") ===  "fd3")
