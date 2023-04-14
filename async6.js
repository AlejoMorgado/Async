const getStatus = async () => {
  try {
    const getPeople = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    })
    const data = await getPeople.json();
    const people = data.results.map((person) => {
      return {
        name: person.name,
        species: person.species,
        status: person.status,
      }
    })
    .filter((person)=> person.status === "Alive")
    console.log(people);
  }catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}
getStatus()