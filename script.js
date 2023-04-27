const recipeData = [{ name: 'Pan con quinua', ingredients: [{ name: 'harina', percentage: 40, weight: 50 }, { name: 'agua' }] }, { name: 'Pan arcoiris' }]
/* Views */
const newRecipeView = document.querySelector('#newRecipe')
const recipeListView = document.querySelector('#recipeList')
const recipeDetailsView = document.querySelector('#recipeDetails')

/* View a recipe */
const viewRecipe = (e) => {
  const recipeName = e.target.textContent
  const recipeObj = recipeData.find(recipe => recipe.name === recipeName)
  const title = recipeDetailsView.querySelector('#recipeName')
  title.textContent = recipeName
  const weight = recipeDetailsView.querySelector('#weight input')
  weight.value = recipeObj.weight || weight.value
  // create list elements of ingredients
  recipeDetailsView.appendChild(createListIngredients(recipeObj.ingredients))

  recipeListView.style.display = 'none'
  recipeDetailsView.style.display = 'block'
}

const createListIngredients = (ingredients) => {
  const ingredientListEle = document.createElement('ul')
  if (ingredients && ingredients.length > 0)
    for (const ingredient of ingredients) {
      // create ingredient component
      const ingredientEle = document.createElement('li')
      const percentage = document.createElement('p')
      const name = document.createElement('p')
      const weight = document.createElement('input')
      const textUnit = document.createElement('p')
      percentage.textContent = ingredient.percentage + ' %'
      name.textContent = ingredient.name
      weight.value = ingredient.weight
      textUnit.textContent = 'grs'
      ingredientEle.appendChild(percentage)
      ingredientEle.appendChild(name)
      ingredientEle.appendChild(weight)
      ingredientEle.appendChild(textUnit)
      ingredientEle.classList.add('ingredient')
      ingredientListEle.appendChild(ingredientEle)
    }
  console.log(ingredientListEle)
  return ingredientListEle
}
/* Show recipes */
const populateRecipeList = () => {
  const recipeList = document.querySelector('#recipes')
  recipeList.innerHTML = ''
  recipeData.forEach((item) => {
    const li = document.createElement("li")
    li.innerText = item.name
    li.addEventListener('click', viewRecipe)
    recipeList.appendChild(li)
  })
}

populateRecipeList();

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

/**
 * create a new recipe
 */

const newRecipeBtn = document.querySelector('#createRecipe')
const openNewRecipeView = () => {
  newRecipeView.style.display = 'block'
  recipeListView.style.display = 'none'
}
newRecipeBtn.addEventListener('click', openNewRecipeView)

/* Save a recipe */
const saveRecipeBtn = document.querySelector("#saveRecipe")
const saveRecipe = () => {
  /*get values from inputs
    name recipe
    ingredients name, percentage
   */
  // TODO: verify all fields have content
  const newRecipe = {}
  newRecipe.name = document.querySelector("#recipeName").value
  newRecipe.ingredients = []
  newRecipe.weight = 1000

  const ingredients = document.querySelector('#ingredients')
  for (const ingredientDiv of ingredients.children) {
    const ingredient = {}
    ingredient.name = ingredientDiv.querySelector('.name').value
    ingredient.percentage = ingredientDiv.querySelector('.percentage').value
    ingredient.weight = newRecipe.weight * ingredient.percentage / 100
    newRecipe.ingredients.push(ingredient)
  }

  recipeData.push(newRecipe)
  console.log({ recipeData })
  populateRecipeList();
  // display recipeList screen and a message of success on saving the recipe
  newRecipeView.style.display = 'none'
  recipeListView.style.display = 'block'
}
saveRecipeBtn.addEventListener("click", saveRecipe);