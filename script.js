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

//Je soumets la Div switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('div cliqué');
    btn.classList.toggle('btn-change')
})