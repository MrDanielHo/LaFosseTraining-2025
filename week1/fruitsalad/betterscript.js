const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
 
fruitForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    addFruit(e.target[0].value)
    e.target[0].value = ""
   
})
 
function addFruit(fruit){
    const li = document.createElement('li')
    li.textContent = fruit
    li.addEventListener("click", removeFruit, {once: true})
    fruitList.appendChild(li)
 
}
 
function removeFruit(e){
    e.target.remove()
}
 
// Option 2 to remove fruits
// fruitList.addEventListener("click", (e) => {
//     e.target.remove()
 
// })
 
 