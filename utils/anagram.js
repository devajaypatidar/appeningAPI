const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const buildCharMap = (str) => {
        const charMap = {};
        for (let char of str.toLowerCase()) {
            if (char.match(/[a-zA-Z]/)) {
                charMap[char] = (charMap[char] || 0) + 1;
            }
        }
        return charMap;
    }

    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return Object.keys(charMap1).length === Object.keys(charMap2).length;
}

module.exports = anagram;
