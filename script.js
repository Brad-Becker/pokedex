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

pokemonRepository.add("Bulbasaur");
pokemonRepository.add("Chikorita");
pokemonRepository.add("Treecko");
pokemonRepository.add("Turtwig");
pokemonRepository.add("Victini");

pokemonRepository.getAll().forEach(pokemon=>{
  document.write(pokemon + "<br>");
})

