// constant variable that holds my age
const myAge = 9;

// variable earlyYears that is set to 2
let earlyYears = 2;
earlyYears *= 10.5;

// variable that is set to myAge - the first 2 years ew already accounted for
let laterYears = myAge - 2;
// reasign the value of laterYears by multiplying it by 4
laterYears *= 4;

// console.log(earlyYears)
// console.log(laterYears)

// var that adds earlyYears to laterYears 
let myAgeInDogYears = earlyYears + laterYears;

// var myName set to a string to wich we apply 
// the built-in method .toLowerCase()
const myName = 'EugenFM'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years 
which is ${myAgeInDogYears} years old in dog years. ` )

