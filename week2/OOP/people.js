// const person = {
//     name: "mark",
//     age: 34,

//     // we dont need to do the below as a function with the keyword function
//     introduce(){
//         console.log(`Hi my name is ${this.name}!`);
//     }    
// }
// // person.introduce()
// // console.log(person.name);
// // console.log(person.introduce());

// const personTwo = {
//     name: "helena",
//     age: 28,
//     introduce() {
//         console.log(`hi my name is ${this.name}!`);
//     }
// }
// // personTwo.introduce()

// const personThree = {
//     name:   'Miriam',
//     age:    42,
//     introduce(){
//         console.log(`Hi my names is ${this.name}`);
//     }
// }

// const personFour = {
//     name: 'Albert',
//     age: 71,
//     introduce: () => {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }
// personFour.introduce() // the name cannot pull this out of the object.

class Person {
    static population = 0
    static averageLifeExpectancy = 74
    static increaseLifeExpectancy (years) {
        Person.averageLifeExpectancy += years
    }

    constructor(
        name,
        age,
        employer
    ){
        this.name = name
        this.age = age
        this.employer = employer
        Person.population +=1;
    }

    introduce(){
        console.log(`Hi my name is ${this.name}`);
    }
    eat(food) {
        console.log(`${this.name} eats one ${food}`);
    }
}

const personOne = new Person ('mark corrigan', 37, 'JLB')
// console.log(personOne);

const personTwo = new Person ('jeremy osbourne', 36, 'unemployed')
// console.log(personTwo);
// console.log(personTwo.eat('naan'))


// const emilie = new Person ('emilie sherrott', 33, 'lafosse')
// const monia = new Person ('Monia Favaro', 30, 'lafosse')
// const simon = new Person ('Simon clemson', 42, 'lafosse')

class LaFosseTrainer extends Person {
    constructor(name, age, jobTitle) {
        super(name, age, "LaFosse")
        this.jobTitle = jobTitle
    }
    teach (cohort) {
        console.log(`${this.name} is teaching the ${cohort} cohort`);
    }
}

const emilie = new LaFosseTrainer('emilie sherrott', 33, "Senior Engineering Trainer")
emilie.introduce()
emilie.eat('chicken')
emilie.teach('murati')

console.log(Person.averageLifeExpeÇtancy);
OersonOne.increaseLifeExpectancy(6)
console.log(Person.averageLifeExpeÇtancy);

class Doctor extends Person {
    constructor(
        name, 
        age, 
        specialisation) {
            super (
                name,
                age,
                'NHS')
            this.specialisation = specialisation
    }
    givePrescription (years) {
        console.log(`${this.Name} adminsisters ${amount} of ${drug}`);
    }
    disvoerMedicine(medicine, years) {
        Person.averageLifeExpectancy
    }
}