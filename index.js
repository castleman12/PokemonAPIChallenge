let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

const results = document.querySelector('.results');
const pokeSearch = document.querySelector('search');
const submit = document.querySelector('submit');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', fetchResults);


