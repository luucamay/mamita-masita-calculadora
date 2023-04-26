
// Window Load Event
window.addEventListener('load', () => {
  registerWorker();
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

/* Put code here */
const addIngredientBtn = document.getElementById("addIngredient");
const addIngredient = () => {
  // create new ingredient component
  const ingredient = document.createElement("div");
  const ingPercentage = document.createElement("input");
  const ingName = document.createElement("input");
  ingPercentage.placeholder = "0%";
  ingName.placeholder = "nombre de ingrediente";
  ingredient.appendChild(ingPercentage);
  ingredient.appendChild(ingName);
  const ingredients = document.getElementById("ingredients");
  ingredients.appendChild(ingredient);

}
addIngredientBtn.addEventListener("click", addIngredient);
