let longestPalindrome = (s) => {
    let j = s.length - 1;
    let i = 0;
    for (i = 0; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            break;
        }
    }
    if (i != j) {
        return `Not a Palindrome`;
    } else {
        return `Palindrome`;
    }
};

let result = longestPalindrome("madam");
console.log(result);
