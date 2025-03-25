// ARRAYS
const simpleArrays = [1,2,3]
console.log(simpleArrays[2]);

console.log(simpleArrays.length);

// MAP - iterate over every element and perform the same action
// FILTER - run an expression on every element and return an array based on the condition
// REDUCE - itereate over an array and perform action to return one value.

const cities = ["norwich", "milton keynes", "guildford", "tottenham", "hull"]

// MAP
// const capitalisedCities = cities.map(cities => cities.toUpperCase)
// console.log(capitalisedCities);

// FILTER
// const filteredCities = cities.filter(i => i.length < 5)
// console.log(filteredCities)

const danielObject = {
    firstName: "daniel",
    lastName: "ho",
    age: 35,
    bloodType: "b+rh",
    location: "London",
    trainer: false    
}

console.log(danielObject.age);
console.log(danielObject['age']);