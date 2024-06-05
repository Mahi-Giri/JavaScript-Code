// // BrutForce
// const sumOfThree = (arr, p) => {
//     let maxSum = 0;

//     for (let i = 0; i < arr.length - p; i++) {
//         let sum = 0;
//         for (let j = i; j < i + p; j++) {
//             sum += arr[j];
//         }
//         maxSum = Math.max(sum, maxSum);
//     }
//     return maxSum;
// };

// let arr = [2, 4, 6, 1, -2, 9, 0];
// let result = sumOfThree(arr, 3);
// console.log(result);

// Sliding window
const sumOfThree = (arr, p) => {
    let max = 0;
    let sum = 0;

    for (let i = 0; i < p; i++) {
        sum = sum + arr[i];
    }

    max = sum;

    for (let i = p; i < arr.length; i++) {
        sum += arr[i] - arr[i - p];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};

let arr = [2, 4, 6, 3, -2, 9, 0];
let result = sumOfThree(arr, 3);
console.log(result);
