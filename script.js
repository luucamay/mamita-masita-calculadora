const recipeData = [{ name: 'Pan con quinua', weight: 1000, totalPercentage: 100, ingredients: [{ name: 'harina', percentage: 40 }, { name: 'agua', percentage: 60 }] }, { name: 'Pan arcoiris' }]
/* Views */
const newRecipeView = document.querySelector('#newRecipe')
const recipeListView = document.querySelector('#recipeList')
const recipeDetailsView = document.querySelector('#recipeDetails')

/* View a recipe */
const viewRecipe = (recipeName) => {
  const recipeObj = recipeData.find(recipe => recipe.name === recipeName)
  const title = recipeDetailsView.querySelector('#recipeName')
  title.textContent = recipeName
  const weight = recipeDetailsView.querySelector('#weight input')
  weight.addEventListener('change', (e) => updateRecipeWeight(e, recipeObj))
  weight.value = recipeObj.weight
  // create list elements of ingredients
  const listIngredients = recipeDetailsView.querySelector('#recipeIngredients')

  const newListIngredients = createListIngredients(recipeObj)
  listIngredients.replaceWith(newListIngredients)

  recipeListView.style.display = 'none'
  recipeDetailsView.style.display = 'block'
}

const updateRecipeWeight = (e, recipeObj) => {
  recipeObj.weight = e.target.value
  viewRecipe(recipeObj.name) // TODO update only the inputs for weights
}

const updateRecipeWeightByInput = (e, recipeObj) => {
  const ingredientWeight = Number(e.target.value)
  const ingredientEle = e.target.parentNode
  // get ingredient percentage
  const ingredientPercentage = Number(ingredientEle.querySelector('p').textContent)
  recipeObj.weight = ingredientWeight * recipeObj.totalPercentage / ingredientPercentage
  viewRecipe(recipeObj.name)
}

const createListIngredients = (recipeObj) => {
  const ingredients = recipeObj.ingredients
  const ingredientListEle = document.createElement('ul')
  ingredientListEle.id = 'recipeIngredients'
  if (ingredients && ingredients.length > 0)
    for (const ingredient of ingredients) {
      const ingredientWeight = Math.round((recipeObj.weight * ingredient.percentage / recipeObj.totalPercentage) * 10) / 10;
      // create ingredient component
      const ingredientEle = document.createElement('li')
      const percentage = document.createElement('p')
      const symbol = document.createElement('p')
      const name = document.createElement('p')
      const weight = document.createElement('input')
      const textUnit = document.createElement('p')
      percentage.textContent = ingredient.percentage
      symbol.textContent = '%'
      name.textContent = ingredient.name
      weight.value = ingredientWeight
      weight.addEventListener('change', (e) => updateRecipeWeightByInput(e, recipeObj))
      textUnit.textContent = 'grs'
      ingredientEle.appendChild(percentage)
      ingredientEle.appendChild(symbol)
      ingredientEle.appendChild(name)
      ingredientEle.appendChild(weight)
      ingredientEle.appendChild(textUnit)
      ingredientEle.classList.add('ingredient')
      ingredientListEle.appendChild(ingredientEle)
    }
  //return ingredientList

  return ingredientListEle
}
/* Show recipes */
const populateRecipeList = () => {
  const recipeList = document.querySelector('#recipes')
  recipeList.innerHTML = ''
  recipeData.forEach((item) => {
    const li = document.createElement("li")
    li.innerText = item.name
    li.addEventListener('click', () => viewRecipe(item.name))
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
  newRecipe.totalPercentage = 0
  const ingredients = document.querySelector('#ingredients')
  for (const ingredientDiv of ingredients.children) {
    const ingredient = {}
    ingredient.name = ingredientDiv.querySelector('.name').value
    ingredient.percentage = Number(ingredientDiv.querySelector('.percentage').value)
    newRecipe.totalPercentage += ingredient.percentage
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