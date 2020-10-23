let baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;
const results = document.querySelector('.results');
const pokeSearch = document.querySelector('search');
const submit = document.querySelector('submit');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}${search.value.toLowerCase()}`
    console.log(url)


fetch(url)
.then(function(result) {
    return result.json();
}) .then(function(json) {
    displayResults(json);
})
}

function displayResults(json) {
    let pokeImage = document.getElementById('pokeImage')
    while (pokeImage.firstChild) {
        pokeImage.removeChild(name.firstChild) 
    }
    let pokeName = document.getElementById('pokeInfo')
    while (pokeName.firstChild) {
        pokeName.removeChild(pokeName.firstChild);
    }
    let pokeType = document.getElementById('pokeInfo');
    while (pokeType.firstChild) {
        pokeType.removeChild(type.firstChild)
    }
    let pokeWeight  = document.getElementById('pokeInfo')
    while (pokeWeight.firstChild) {
        pokeWeight.removeChild(pokeWeight.firstChild)
    }

    let pokeHeight  = document.getElementById('pokeInfo')
    while (pokeHeight.firstChild) {
        pokeHeight.removeChild(pokeHeight.firstChild)
    }


    let info = json;

    console.log(info)

    let pokeId = json.id
    console.log(pokeId)
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;
    let name = json.name
    let height = json.height
    let type = json.types[0].type.name;
    let weight = json.weight;
    let moves = json.moves
   

    let img = document.querySelector('#pokeImage')
    
    img.src = image
    img.id = 'pokeImage'

    let nameP = document.createElement('p')
    nameP.textContent = `Name: ${name}`
    nameP.id = "name";
    pokeName.appendChild(nameP)

    let typeP = document.createElement('p')
    typeP.textContent = `Type: ${type}`
    typeP.id = "type"
    pokeType.appendChild(typeP);

    let heightP = document.createElement('p')
    heightP.textContent = `Height: ${height}`
    heightP.id = 'height'
    pokeHeight.appendChild(heightP)

    let weightP = document.createElement('p')
    weightP.textContent = `Weight: ${weight}`
    weightP.id = "weight"
    pokeWeight.appendChild(weightP)
}