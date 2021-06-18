// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

let string = "hello";
function reverseString(str) {
  // SOLUTION 1
  return str.split("").reverse().join("");

  // SOLUTION 2
  let revString = "";

  for (let i = 0; i < str.length; i++) {
    revString = str[i] + revString;
  }
  return revString;

  // SOLUTION 3
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;

  // SOLUTION 4
  let revString = "";
  for (let char of str) {
    revString = char + revString;
  }
  return revString;

  // SOLUTION 5
  let revString = "";
  str.split("").forEach((char) => (revString = char + revString));
  return revString;

  // SOLUTION 6
  let revString = "";
  str.split("").reduce((acc, item) => (revString = item + acc));
  return revString;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const reverseString = str.split("").reverse().join("");
  if (reverseString === str) {
    return true;
  } else {
    return false;
  }
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return parseInt(int.toString().split("").reverse().join(""));
}

reverseInt(integer);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
let string = "i love javascript";
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const char = str.split("");

  let wordCount = {};

  char.map((item) => (wordCount[item] = wordCount[item] + 1 || 1));

  // Turns an object into an array of arrays
  const myArray = Object.entries(wordCount);

  const bArray = myArray.sort((a, b) => b[1] - a[1]).slice(0, 1);

  const result = bArray[0];

  return result[0];
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let numArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArray.push("fizzbuzz");
    } else if (i % 3 === 0) {
      numArray.push("fizz");
    } else if (i % 5 === 0) {
      numArray.push("buzz");
    } else {
      numArray.push(i);
    }
  }
  return numArray;
}

// Call Function
const output = reverseString("hello");

console.log(output);
