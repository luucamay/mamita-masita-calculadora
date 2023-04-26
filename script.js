
// Window Load Event
window.addEventListener('load', () => {
  // registerWorker();
});

// Register Worker Function
const registerWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  }
}

/* Add a new ingredient */
const addIngredientBtn = document.querySelector("#addIngredient")
const addIngredient = () => {
  // create new ingredient component
  const ingredient = document.createElement("div")
  const ingPercentage = document.createElement("input")
  const symbol = document.createElement("p")
  const ingName = document.createElement("input")
  symbol.textContent = '%'
  ingredient.classList.add('ingredient')
  ingName.placeholder = "nombre de ingrediente"
  ingPercentage.placeholder = "0"
  ingName.classList.add('name')
  ingPercentage.classList.add('percentage')
  ingredient.appendChild(ingPercentage)
  ingredient.appendChild(symbol)
  ingredient.appendChild(ingName)
  const ingredients = document.getElementById("ingredients")
  ingredients.appendChild(ingredient)

}
addIngredientBtn.addEventListener("click", addIngredient)

const recipeList = []
/* Save a recipe */
const saveRecipeBtn = document.querySelector("#saveRecipe")
const saveRecipe = () => {
  /*get values from inputs
    name recipe
    ingredients name, percentage
   */
  const newRecipe = {}
  newRecipe['name'] = document.querySelector("#recipeName").value
  newRecipe['ingredientList'] = []

  const ingredients = document.querySelector('#ingredients')
  for (const ingredientDiv of ingredients.children) {
    const ingredient = {}
    ingredient['name'] = ingredientDiv.querySelector('.name').value
    ingredient['percentage'] = ingredientDiv.querySelector('.percentage').value

    newRecipe['ingredientList'].push(ingredient)
  }
  recipeList.push(newRecipe)
  //console.log({ recipeList })

}
saveRecipeBtn.addEventListener("click", saveRecipe);