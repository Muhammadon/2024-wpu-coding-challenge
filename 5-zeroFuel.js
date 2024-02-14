// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// cara 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft ? true : false;
// };

// cara 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >= distanceToPump;
// };

// cara 3 one line
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(50, 25, 2));