/*Task programs in Anonyms Funnction
a. Print odd numbers in an array
b. Convert all the strings to title caps in a string array
c. Sum of all numbers in an array
d. Return all the prime numbers in an array
e. Return all the palindromes in an array
f. Return median of two sorted arrays of the same size.
g. Remove duplicates from an array
h. Rotate an array by k times*/

//a. Print odd numbers in an array:

let printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};


//b. Convert all the strings to title caps in a string array
let convertToTitleCaps = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
};


//c. Sum of all numbers in an array
let sumOfNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};




//d.  Return all the prime numbers in an array
let getPrimeNumbers = (arr) => {
    return arr.filter(num => {
        if (num <= 1) 
            return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) 
                return false;
        }
        return true;
    });
};

//e.  Return all the palindromes in an array
let getPalindromes = (arr) => {
    return arr.filter(str => {
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
};

//f. Return median of two sorted arrays of the same size
let getMedianOfSortedArrays = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    let midIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        return mergedArray[midIndex];
    }
};

// Example usage:
console.log(getMedianOfSortedArrays([1, 3, 5], [2, 4, 6])); // Output: 3.5


//g. Remove duplicates from an array
let removeDuplicates = (arr) => {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
};

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


//h. Rotate an array by k times
let rotateArray = (arr, k) => {
    k = k % arr.length;
    let rotatedArray = [];
    for (let i = k; i < arr.length; i++) {
        rotatedArray.push(arr[i]);
    }
    for (let i = 0; i < k; i++) {
        rotatedArray.push(arr[i]);
    }
    return rotatedArray;
};

// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [4, 5, 1, 2, 3]



let arr = [1, 2, 3, 4, 5];
printOddNumbers(arr);

const stringArray = ['hello world', 'goodbye universe'];
const titleCasedArray = convertToTitleCaps(stringArray);
console.log(titleCasedArray);

console.log(sumOfNumbers(arr));

console.log(getPrimeNumbers(arr));

console.log(getPalindromes(["aba", "abc", "madam"]));

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(getMedianOfSortedArrays(arr1, arr2));

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

console.log(rotateArray([1, 2, 3, 4, 5], 2));
