let longestCommonPrefix = (str) => {
    for (let i = 0; i < str[0].length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (str[0][i] != str[j][i]) {
                return str[0].slice(0, i);
            }
        }
    }
    return str[0];
};

let str = ["abb","abc"];
const result = longestCommonPrefix(str);
console.log(result);
