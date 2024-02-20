// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// cara 1
// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(i * x);
//     }
//     return z;
// }

// cara 2
// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => (i + 1) * x);
// }

// one liner 
const countBy = (x, n) => [...Array(n)].map((el, i) => (i +1) * x);

console.log(countBy(1, 10));