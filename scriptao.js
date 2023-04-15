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
  //LISTANDO O TEXTO
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    li.innerText = recipe;

    //ADICIONEI O EVENTO DE COPIAR TEXTO, SEM O BOTÃO
    li.classList.add('copyButton');
    li.addEventListener('click', () => {
      const textToCopy = li.innerText;
      navigator.clipboard.writeText(recipe);
      });      
    //
    recipeList.appendChild(li);

    //CRIANDO BOTÃO COPIAR TEXTO
    //const copyButton = document.createElement('button');
    //copyButton.innerText = '❐';
    //copyButton.classList.add('copyButton');
    //copyButton.addEventListener('click', () => {
    //const textToCopy = li.innerText;
    //navigator.clipboard.writeText(recipe);
    //});
    //li.appendChild(copyButton);

    //DELETANDO O TEXTO
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