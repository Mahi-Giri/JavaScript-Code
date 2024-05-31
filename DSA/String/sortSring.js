// const sortArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// };

// let str = "mahesh giri";
// console.log(str.split('').sort());
// let asciiValueArr = [];
// for (let i = 0; i < str.length; i++) {
//     asciiValueArr.push(str[i].charCodeAt(0));
// }

// let asciiSortedValue = sortArray(asciiValueArr);
// let finalOutput = [];
// for (let i = 0; i < asciiSortedValue.length; i++) {
//     finalOutput.push(String.fromCharCode(asciiSortedValue[i]));
// }
// console.log(finalOutput.join(""));

// * Optimized code * //
function bubbleSort(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
}

let str = "Mahesh Giri";
let sortedStr = bubbleSort(str);
console.log(sortedStr);
