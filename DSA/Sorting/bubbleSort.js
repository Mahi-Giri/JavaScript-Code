let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

const arr = [5, 16, 4, 52, 7, 1, 6, 85];
const sortedArray = bubbleSort(arr);
console.log(sortedArray);