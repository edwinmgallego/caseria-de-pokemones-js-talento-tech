function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) =>
      displayPokemon(data).catch((error) =>
        console.error("error atrapando el pokemon: ", error)
      )
    );
}

function displayPokemon(pokemon) {
  const pokemonInfo = document.getElementById("pokemon-info");
  pokemonInfo.innerHTML = `
<p>nombre:${pokemon.name}</p>
<p>ID:${pokemon.id}</p>
<p>Altura:${pokemon.height}</p>
<p>nombre:${pokemon.weight}</p>
<p><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></p>




`;
}
