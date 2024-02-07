// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// cara 1
// function hero(bullets, dragons){
//     if (bullets / 2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// cara 2
// function hero(bullets, dragons) {
//     return (bullets / 2 >= dragons) ?  true : false;
// }

// cara 3
function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

console.log(hero(10, 5));