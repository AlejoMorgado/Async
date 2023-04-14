const fetchCharactersInfo = async () => {
  try {
    const charactersResponse = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    })
    const charactersData = await charactersResponse.json();
    const characters = charactersData.results.map((character) => {
      return {
        name: character.name,
        species: character.species,
        status: character.status,
        gender: character.gender
      }
    })
      .sort((a, b) => a.name.localeCompare(b.name));
    console.log(characters);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}
fetchCharactersInfo();
