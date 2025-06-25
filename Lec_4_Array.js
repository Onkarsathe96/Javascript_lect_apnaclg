// let marks = [85, 97, 44, 37, 76, 60]
// console.log(marks.length)
// console.log(typeof (marks))
// marks[0] = 90
// console.log(marks)
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i])
// }
// for (let val of marks) {
//     console.log(val)
// }

//Qs1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for (let val of marks) {
//     sum += val
// }
// let avg = sum / marks.length;
// console.log(`Average marks of the class = ${avg}`)


//Qs2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price afterapplying offer.
// let price = [250, 645, 300, 900, 50]
// let i = 0
// for (let val of price) {
//     let dis = val * 0.10
//     price[i] = price[i] - dis
//     console.log(price[i])
//     i++
// }
// let price = [250, 645, 300, 900, 50]
// for (let i = 0; i < price.length; i++) {
//     let dis = price[i] * 0.10
//     price[i] = price[i] - dis
// }
// console.log(price)

//Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a. Remove the first company from the array
// company.shift()
// console.log(company)

// b. Remove Uber & Add Ola in its place
company.splice(2,1,"Ola")
console.log(company)

// c. Add Amazon at the end
// company.push("Amazon")
// console.log(company)