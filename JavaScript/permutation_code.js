
let permArr = [];
let otherChars = [];

function permute(input) {
    // Split string to array
    const chars = input.split("");
    for (let i = 0; i < chars.length; i++) {
        // PLUCK current character
        const ch = chars.splice(i, 1);
        // push to other chars in word
        otherChars.push(ch);

        if (chars.length === 0) {
            permArr[permArr.length] = usedChars.join("");
        }

        permute(chars.join(""));
        chars.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};
console.dir(permute("hello"));
