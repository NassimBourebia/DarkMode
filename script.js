//Je sélectionne et je stocke

//la DIV switch
const switchBox = document.querySelector('.switch');

//la DIV btn (le cercle)
const btn = document.querySelector('.btn');

//l'icone 
const icone = document.querySelector('i');

//la Div container 
const container = document.querySelector('.container');

//le titre 
const titre = document.querySelector('h1')

// Je soumets la Div switch à une action au clic
switchBox.addEventListener('click', function () {
  console.log('div cliqué');
  btn.classList.toggle('btn-change');
  icone.classList.toggle('fa-moon');
  icone.classList.toggle('fa-sun');
  icone.classList.toggle('icone-change');
  //La DIV switch change de couleur de fond
  switchBox.classList.toggle('switch-change')
  //La DIV container change de couleur de fond
  container.classList.toggle('container-change');
  //Je modifie le texte du titre
  if (titre.innerHTML === "DARK MODE") {
    titre.innerHTML = "LIGHT MODE"
  } else {
    titre.innerHTML = "DARK MODE"
  }
});
