// *Direct* students, individually, to write a function named *farewell* that does the following:
// * Accepts a single argument, name
// * Returns the string `“Goodbye forever, “ + name`
//
// *Provide* the following examples to aid the students:
// * `farewell(“Nancy”)` -> “Goodbye forever, Nancy”
// * `farewell(“Bertrand”)` -> “Goodbye forever, Bertrand”

function farewellStudent(a) {
    return "Goodbye forever, " + a;
}


// *Direct* students, in pairs, to write a function that does the following:
// * Accepts three arguments: `start`, `stop`, and `final`
// * Counts down from the `start` number to the `stop` number, outputting each number as it does so
// * Instead of the `stop` number, outputs the value of `final`
// * *OPTIONAL* extend the function so that it can handle the possibility of stop being greater than start
 
function finalCountDown (numberStart,numberStop ,numberFinal) {
    if (numberStart > numberStop) {
        for (let i = numberStart; i > numberStop; i--) {
            console.log(i);
            if (i === numberStop) {
                console.log(numberFinal);
            }
        }
    } else {
        for (let i = numberStart; i < numberStop; i++) {
            console.log(i);
        }
    }
}

// *Direct* students, in pairs, to write a function (countTarget()) that does the following:
// * Accepts two arguments: an array of values (arr) and a target value (target)
// * Counts the number of times target appears in arr
// * Returns an object with two keys:
//   * success, storing a boolean value based on whether the target was found at all within arr
//   * count, storing the number of times target appears in arr

// *Provide* the following helpful examples:
// * countTarget([1, 1, 1], 1) -> { success: true, count: 3 }
// * countTarget([1, 1, 1], 3) -> { success: false, count: 0 }
// * countTarget([1, 1, “1”], 1) -> { success: true, count: 2 }