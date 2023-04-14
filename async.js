const fetchPeople = async () => {
  try {
    const requestPeople = await fetch("https://swapi.dev/api/people/", {
      method: "GET"
    });
    const data = await requestPeople.json();
    const people = data.results.map((person) => {
      return {
        name: person.name,
        height: person.height,
        gender: person.gender,
        mass: person.mass
      }
    })
      .filter((person) => person.height > 150)
    console.log(people);
  } catch (error) {
    console.error(`An error ocurred: ${error}`);
  }
}
fetchPeople();


