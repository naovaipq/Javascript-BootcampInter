
function randonNumberPokemon(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

const btnCat = document.getElementById('change-pokemon');
const pokemonName = document.getElementById('name');
const pokemonImg = document.getElementById('pokemon');

const getPokemon = async () => {
    try {
        const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${randonNumberPokemon(1, 400)}`
        const data = await fetch(BASE_URL)
            .then((response => {
                return response.json()
            }))
            .then(data => {
                console.log(data);
                let nome = data['name'];
                let img = data['sprites']['front_default'];
                pokemonName.textContent = nome;
                pokemonImg.setAttribute('src', img);
            })
    }
    catch (e) {
        console.log(e.message);
    }
}

btnCat.addEventListener('click', getPokemon);
getPokemon();