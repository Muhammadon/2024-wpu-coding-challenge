// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// cara 1
// function smash (words) {
//     const result = words.join(' ');
//     return result;
// };

// cara 2
// const smash = (words) => words.join(' ');

// cara 3 (bar bar)
function smash(words) {
    let result = '';
    for(let i = 0; i < words.length; i++) {
        result += words[i];
        if (i != words.length - 1) {
            result += ' ';
        }
    }
    return result;
}

console.log(smash(["madun", "and", "zain"]));