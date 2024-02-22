// WPU Coding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// cara 1
// var countSheep = function (num){
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//         result += i + " sheep...";
//     }
//     return result;
// };


// cara 2
// var countSheep = function (num) {
//     return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
// }



// cara 3 one liner
const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");




console.log(countSheep(3));