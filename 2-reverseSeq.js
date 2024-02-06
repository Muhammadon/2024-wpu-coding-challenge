// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// cara 1
// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }

//     return result;
// };

// cara 2
// const reverseSeq = (n) => {
//     return Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();
// }

// cara 3
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));