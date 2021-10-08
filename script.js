let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({
  name: 'Bulbasaur',
  height: 7,
  types: ['grass', 'poison']
});

pokemonRepository.add({
  name: 'Charmander',
  height: 0.5,
  types: ['fire', 'dragon']
});

pokemonRepository.add({
  name: 'Pikachu',
  height: 1.1,
  types: ['electricity']
});


pokemonRepository.getAll().forEach(pokemon=>{
  document.write("Name: " +pokemon.name + "<br>");
  document.write("Height: " +pokemon.height + "<br>");
  document.write("Types: "+ pokemon.types + "<br>");
})



