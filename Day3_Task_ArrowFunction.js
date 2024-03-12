//Print Odd Numbers in an Array:
const printOddNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//Convert Strings to Title Caps in a String Array:
const titleCaps = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
};
  
console.log(titleCaps(['apple', 'banana', 'cherry']));


//Sum of All Numbers in an Array:
const sumOfNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
};
  
console.log(sumOfNumbers([1, 2, 3, 4, 5]));


//Return All Prime Numbers in an Array:
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
};
  
const getPrimeNumbers = (arr) => {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primes.push(arr[i]);
      }
    }
    return primes;
};
  

console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));


//Return All Palindromes in an Array:
const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
  
  const getPalindromes = (arr) => {
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPalindrome(arr[i])) {
        palindromes.push(arr[i]);
      }
    }
    return palindromes;
};
  
console.log(getPalindromes(['level', 'apple', 'radar', 'banana']));


  
  