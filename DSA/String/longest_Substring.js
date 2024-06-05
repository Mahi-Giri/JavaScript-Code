const lengthOfLongestSubstring = (s) => {
    if (!s) return 0;

    let start = 0;
    let end = 0;
    let maxLen = 0;

    const uniqueChar = new Set();

    while (end < s.length) {
        if (!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxLen = Math.max(maxLen, uniqueChar.size);
        } else {
            uniqueChar.delete(s[start]);
            start++;
        }
    }
    return maxLen;
};

const subString = lengthOfLongestSubstring("abccbabb");
console.log(subString);
