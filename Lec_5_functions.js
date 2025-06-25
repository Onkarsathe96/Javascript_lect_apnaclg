//Qs. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
// function first(str) {
//     let count = 0
//     for (let char of str) {
//         if ('aeiouAEIOU'.includes(char)) {
//             count++
//         }
//     }
//     console.log(count)
// }
// let str = "Onkar"
// first(str)

const countVowels = (str) => {
    let count = 0;
    for (let char of str) {
        if ('aeiouAEIOU'.includes(char)) {
            count++;
        }
    }
    return count;
};

let str = "Onkar";
console.log(countVowels(str)); // Output: 2
