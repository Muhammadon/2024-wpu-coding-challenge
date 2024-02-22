// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// cara 1
// function DNAtoRNA(dna) {
//     let rna = dna.replace(/T/g, 'U');
//     return rna;
// }

// cara 2
// function DNAtoRNA(dna) {
//     let rna = "";
//     for (let i = 0; i < dna.length; i++) {
//         // if (dna[i] === "T") {
//         //     rna += "U";
//         // } else {
//         //     rna += dna[i];
//         // }
//         rna += (dna[i] === "T") ? "U" : dna[i];
//     }
//     return rna;
// }

// cara 3 
const DNAtoRNA = (dna) => {
    return dna
        .split("")
        .map((el) => el === "T" ? "U" : el)
        .join("");
}

console.log(DNAtoRNA("GACAT"));