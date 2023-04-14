const getGenders = async () => {
  try {
    const peopleResponse = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    })
    const data = await peopleResponse.json();
    const people = data.results.map((person) => {
      return {
        name: person.name,
        species: person.species,
        status: person.status,
        gender: person.gender
      }
    })
    const males = people.filter(person => person.gender === "Male");
    const females = people.filter(person => person.gender === "Female");
    console.log([males, females]);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

getGenders();
