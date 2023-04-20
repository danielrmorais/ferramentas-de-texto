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
        navigator.clipboard.writeText(recipe)
        .then(() => { alert('Texto copiado com sucesso!'); })
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


// FUNÇÕES DOS RADIOS DE TEXTO
function onButtonClicked() {
  var textInput = document.getElementById("recipe");
  var text = textInput.value;
  var uppercaseCheckbox = document.getElementById("maiuscula");
  var lowercaseCheckbox = document.getElementById("minuscula");
  var capitalizerCheckbox = document.getElementById("Primeiramaiuscula");

  var transformedText = text;
  if (uppercaseCheckbox.checked) {
    transformedText = transformedText.toUpperCase();
  }
  if (lowercaseCheckbox.checked) {
    transformedText = transformedText.toLowerCase();
  }
  if (capitalizerCheckbox.checked) {
    transformedText = transformText(transformedText);
  }

  textInput.value = transformedText;
}
function transformText(text) {
  return text.replace(/(?:^|\s)\S/g, function(firstLetter) { return firstLetter.toUpperCase(); });
}

//FUNÇÃO DO GERADOR DE LINK DO WHATSAPP
function generateLink() {
  let numero = document.form_Whats.numero.value;
  let mensagem = document.form_Whats.mensagem.value;
  let url = "https://api.whatsapp.com/send?phone=";
  let url_final = `${url}${numero}&text=${mensagem}`;
  document.getElementById('url_final').innerText = url_final;
}
function copyLink() {
  const urlFinal = document.getElementById('url_final');
  const urlText = urlFinal.innerText;
  navigator.clipboard.writeText(urlText)
    .then(() => {
      alert('Link copiado para a área de transferência!');
    })
}


//FUNÇÃO PARA TROCAR DE ABA
function trocarAba(indice) {
  // Ocultar todos os conteúdos de abas
  var conteudos = document.querySelectorAll('.conteudo-aba > div');
  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].classList.remove('mostrar');
  }
  // Mostrar o conteúdo da aba selecionada
  conteudos[indice].classList.add('mostrar');
}