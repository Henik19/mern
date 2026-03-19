// Dummy Array
const exArray = [4, 8, 2, 11, 6, 7, 10];

// Display array on screen
document.getElementById("arrayDisplay").innerHTML = 
    "Array: " + exArray.join(", ");

// Normal Function
function findMaximum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Anonymous Function
const findSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};

// Arrow Function
const countOdd = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};

function performOperations() {

    let max = findMaximum(exArray);
    let sum = findSum(exArray);
    let odd = countOdd(exArray);

    document.getElementById("maxResult").innerHTML = "Maximum number: " + max;
    document.getElementById("sumResult").innerHTML = "Sum of all elements: " + sum;
    document.getElementById("oddResult").innerHTML = "Count of odd numbers: " + odd;

    console.log("Maximum number:", max);
    console.log("Sum of all elements:", sum);
    console.log("Count of odd numbers:", odd);
}