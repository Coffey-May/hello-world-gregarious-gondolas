const citiesCollection = [
  {
    id: "Djbouti",
    image: "./photos/bouti.jpg",
    name: "Djbouti",
    population:  "956,569",
    attractions: "Lake Abbe",
    food: "skudahkaris",
    fact: "capital city of Djibouti",
  },
  {
    id: "Tadjoura",
    image: "./photos/tadj.jpg",
    name: "Tadjoura",
    population: "14, 820",
    attractions: "Les Sables Blancs beach",
    food: "lahoh, skoudehkaris",
    fact: "Tadjoura is home to the rare Francolin bird"
  },
  {
    id: "Obock",
    image: "./photos/obock.jpg",
    name: "Obock",
    population: "12,000",
    attractions: "Gulf of Aden",
    food: "fah-fah, sambuussa",
    fact: "located on the northern shore of the Gulf of Tadjoura",
  }
  ]

  export const useCities = () => {
    return citiesCollection;
  }