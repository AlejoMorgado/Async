const fetchSpecies = async() => {
  try {
    const requestSpecies = await fetch("https://swapi.dev/api/species", {
      method: "GET"
    });
    const data = await requestSpecies.json();
    const speciesType = data.results.map((spicies) => {
      return {
        name: spicies.name,
        language: spicies.language,
        average_lifespan: spicies.average_lifespan,
        classification: spicies.classification
      }
    })
    .filter((spicies) => spicies.classification === "mammal" )
    console.log(speciesType);
  }catch (error){
    console.error(`An error ocurred: ${error}`);
  }
}
fetchSpecies()