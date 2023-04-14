const fetchGoodPeople = async () => {
  try {
    const peopleResponse = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    })
    const peopleData = await peopleResponse.json();
    console.log(peopleData);
    const goodPeople = peopleData.results.map((person) => {
      return {
        name: person.name,
        species: person.species,
        status: person.status,
        origin: person.origin.name
      }
    })
      .filter((person) => person.origin.name === "Earth");
    console.log(goodPeople);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

fetchGoodPeople();
