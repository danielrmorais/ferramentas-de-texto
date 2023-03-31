const form = document.querySelector('#form');
const recipeInput = document.querySelector('#recipe');
const recipeList = document.querySelector('#recipeList');

let recipes = [];

function addRecipe(e) {
  e.preventDefault();
  const recipe = recipeInput.value.trim();
  if (!recipe) return;

  recipes.push(recipe);

  recipeInput.value = '';
  recipeInput.focus();

  render();
}

function deleteRecipe(index) {
  recipes.splice(index, 1);
  render();
}

function render() {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    li.innerText = recipe;
    recipeList.appendChild(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '🗑';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => deleteRecipe(index));
    li.appendChild(deleteBtn);
  });
}

form.addEventListener('submit', addRecipe);


function onButtonClicked() {
  var text = document.getElementById("recipe").value;

  if(document.getElementById("maiuscula").checked) document.getElementById("recipe").value = text.toUpperCase();
  if(document.getElementById("minuscula").checked) document.getElementById("recipe").value = text.toLowerCase();
}
