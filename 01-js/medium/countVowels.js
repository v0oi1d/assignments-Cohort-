/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  
  str = str.split('').sort().join('');
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (
          (str.charCodeAt(i) == 65) || 
          (str.charCodeAt(i) == 69) || 
          (str.charCodeAt(i) == 73) || 
          (str.charCodeAt(i) == 79) || 
          (str.charCodeAt(i) == 85) || 
          (str.charCodeAt(i) == 97) || 
          (str.charCodeAt(i) == 101) || 
          (str.charCodeAt(i) == 105) || 
          (str.charCodeAt(i) == 111) || 
          (str.charCodeAt(i) == 117) 
      ) {
          count++;
      }
  }

  return count;
}




module.exports = countVowels;