function isPalindrome(word) {
  // Write your algorithm here
   // iterate from the beginning of the string to the middle of the string
   for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here
  If the **first letter** is the same as the **last
  letter**, and the **second letter** is the same as the **second to last**
  letter, and so on (until the middle of the word), the function should return
  `true`.
*/

/*
  Add written explanation of your solution here
  This code is more efficient with regards to time and space complexity, since it creates fewer new variables and only iterates through half of the string.
  Readability is more challenging at a glance to tell what this function does, particularly without comments. 
  But solution 2 is much more efficient and preffered because it has a better BIG 0 Notation. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("toy"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));

}

module.exports = isPalindrome;
