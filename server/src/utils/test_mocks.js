const characterComplete = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

}

const mockCharacter1 = {
  id: 1,
  name: 'Rick Sanchez',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
}

module.exports = { mockCharacter1, characterComplete }