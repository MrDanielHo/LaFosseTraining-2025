const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection p")

fruitForm.addEventListener("submit", extractFruit)

let calories = 0

let foodArr = {}

// fruitForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     addFruit(e.target[0].value);
//     e.target[0].value = ""
// })


function extractFruit(e) {
    e.preventDefault()
    fetchFruitData(e.target[0].value);
    e.target[0].value = ""
}

async function fetchFruitData(fruit) {
    try {
        const response = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        const data = await response.json()
        addFruit(data)
    } catch (err) { 
        console.log(err)
    }
}

function fetchFruitData (fruit) {
    fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        // .then((response) => response.json())
        .then(processResponse)
        .then((data) => addFruit(data))
        .catch((err) => console.log(err))
    fetch(`https://pixabay.com/api/?key=49560421-cd6b8e7dc5ea2e6ea3f5345a6&q=${fruit}+fruit`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err)      )
}

function processResponse (response) {
    // console.log(response);
    if (response.ok) {
        return response.json()
    } else {
        throw "Error: http status code" + response.status
    }
}

function addFruit(fruit) {
    // console.log("add fruit info", fruit)
    const li = document.createElement("li")
    li.textContent = fruit.name
    li.addEventListener("click", removeFruit, {once: true})

    foodArr.push({
        'name':fruit.name, 
        'calories': fruit.nutritions.calories
    })
    console.log(foodArr);

    fruitList.appendChild(li)

    // calories += fruit.nutritions.calories
    // console.log(calories);

    let calories = foodArr.reduce((partialSum, a) => partialSum + a, 0)
    fruitNutrition.textContent = calories
}

function removeFruit(e) {
    e.target.remove();
    // calories -= e.nutritions.calories
    // fruitNutrition.textContent = calories
}



// totalCalories = 0
// as fruit gets added, store and add calories to the calorie count.
// when fruit gets removed, remove the item from the list and remove the value from the calorie count
// store the fruits as an array?

// let arr = {
//     "apple" :   281,
//     "pear"  :   300,
//     "grape" :   150,
// }

// let totalCalories = arr.reduce((partialSum, a) => partialSum + a, 0)

// As we click on the items to remove them, the array needs to reflect what is shown and redo the above calculation