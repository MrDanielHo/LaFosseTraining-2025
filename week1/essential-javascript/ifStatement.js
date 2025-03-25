const secondsPastMinutes = new Date().getSeconds()
// console.log(secondsPastMinutes);

if (secondsPastMinutes <= 20) {
    console.log("Less than 20s past, the ref is going to blow the whistle soon");
} else if (secondsPastMinutes) {
    console.log("squeaky bum time");
} else {
    console.log("DAMN IT");
}

// Write a short programme that does the following:
// * Declares a constant, num, with a value of their choice.
// * if the value is greater than or equal to 11. outputs High
// * if the valkue is less than 3, outputs Low
// * if the value is between 11 and 3, outputs Medium
// * if the value is exactly 7, outputs Exact

let num = 11
if (num === 7) {
    console.log('Exact');
} else if (num >= 3 && num < 11) {
    console.log('Medium');
} else if (num < 3) {
    console.log('Low');
} else {
    console.log('High');
}