//String Manipulation Functions:


function reverseString(originalString) {
    return originalString.split('').reverse().join('');
}


var originalString = "Hello, i am ibtihel!";
var reversedString = reverseString(originalString);
console.log("Original:", originalString);
console.log("Reversed:", reversedString);

function countCharacters(originalString) {
    return originalString.length;
}


var characterCount = countCharacters(originalString);
console.log("Number of characters:", characterCount);

function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}


// var originalString = "Hello, i am ibtihel!";
console.log(capitalizeWords(originalString));

//Array Functions:

let myarray = [5, 7, 88, 102, 45, 658, 83, 4];
console.log(myarray)

let maxmyarray = myarray[0];
for (let i = 1; i < myarray.length; i++) {
    if (myarray[i] > maxmyarray) {
        maxmyarray = myarray[i];  
    }
 } 
 
 let minmyarray = myarray[0];
    for (let i = 1; i < myarray.length; i++) {
        if (myarray[i] < minmyarray) {
            minmyarray = myarray[i]; 
        }
    }
console.log(maxmyarray) 
console.log(minmyarray) 

 myarray = [5, 7, 88, 102, 45, 658, 83, 4];
function sum(arr) {
    let summyarray = 0;
    for (let i = 0; i < arr.length; i++) {
        summyarray += arr[i]; 
    }
    return summyarray
}
console.log(sum(myarray));

function filterArray(arr, condition) {
    return arr.filter(condition);
}
let filteredArray = filterArray(myarray, function(num) {
    return num >10; 
});

    console.log(filteredArray )

    //Mathematical Functions:

    function factorialRecursive(n) {
        if (n === 0 || n === 1) {
            return 1; // Base case: factorial of 0 or 1 is 1
        } else {
            return n * factorialRecursive(n - 1);
        }}
        let number = 3;
        console.log(number, factorialRecursive(number));

        function isPrime(number) {
           
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false; 
                }
            }
            return true; 
        }
        console.log(isPrime(9)); 
console.log(isPrime(19));