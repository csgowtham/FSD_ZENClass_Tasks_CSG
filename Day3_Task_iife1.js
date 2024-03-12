/*Task programs in IIFE
a. Print odd numbers in an array
b. Convert all the strings to title caps in a string array
c. Sum of all numbers in an array
d. Return all the prime numbers in an array
e. Return all the palindromes in an array
f. Return median of two sorted arrays of the same size.
g. Remove duplicates from an array
h. Rotate an array by k times*/

//a. Print odd numbers in an array:
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
  })();

//b. Convert all the strings to title caps in a string array:
(function() {
    const strings = ['hello', 'world', 'javascript'];
    const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCaps);
  })();

//c. Sum of all numbers in an array:
(function() {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0; // Initialize sum

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Accumulate each number
    }

    console.log("Sum of Array Numbers: " + sum);
})();

//d. Return all the prime numbers in an array
(function() {
  (function() {
    const numbers = [1, 2, 3, 4, 5];

    function isPrime(num) {
        if (num <= 1) 
          return false;
        if (num === 2) 
          return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) 
              return false;
        }
        return true;
    }

    const primeNumbers = numbers.filter(num => isPrime(num));

    console.log(primeNumbers);
})();

})();


//e. Return all the palindromes in an array
(function() {
  const words = ["level", "hello", "radar", "world"];

  function isPalindrome(word) {
      return word === word.split('').reverse().join('');
  }

  const palindromes = words.filter(word => isPalindrome(word));

  console.log(palindromes);
})();


//f. Return median of two sorted arrays of the same size
(function() {
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];

  const merged = [...arr1, ...arr2].sort((a, b) => a - b);

  const length = merged.length;
  const median = length % 2 === 0 ? 
                 (merged[length / 2 - 1] + merged[length / 2]) / 2 :
                 merged[Math.floor(length / 2)];

  console.log(median);
})();


//g. Remove duplicates from an array
(function() {
  const array = [1, 2, 2, 3, 4, 4, 5];

  const uniqueArray = [...new Set(array)];

  console.log(uniqueArray);
})();


//h. Rotate an array by k times
(function() {
  const array = [1, 2, 3, 4, 5];
  let k = 3; // Number of rotations

  const rotateArray = (arr, k) => {
      const n = arr.length;
      k %= n; // Normalize k to be within the range of array length

      // Rotate the array k times
      for (let i = 0; i < k; i++) {
          const lastElement = arr[n - 1];
          // Shift elements to the right
          for (let j = n - 1; j > 0; j--) {
              arr[j] = arr[j - 1];
          }
          arr[0] = lastElement; // Place the last element at the beginning
      }

      return arr;
  };

  const rotatedArray = rotateArray(array, k);
  console.log(rotatedArray);
})();



 
