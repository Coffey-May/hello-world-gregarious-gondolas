const citiesCollection = [
  {
    id: "Berlin",
    name: "Berlin",
    population:  "3.75 million",
    attractions: "Brandenburg Gate, Berlin Wall",
    food: "beer, brautwurst",
    fact: "Berlin is nine times the size of Paris but only 1/5 of the density",
  },
  {
    id: "Hamburg",
    name: "Hamburg",
    population: "1.8 million",
    attractions: "Speicherstadt",
    food: "pickled herring, eel soup",
    fact: "The people of Hamburg are known as 'Hamburgers'!"
  },
  {
    id: "Nuremburg",
    name: "Nuremburg",
    population: "515,201",
    attractions: "Imperial Castle of Nuremburg",
    food: "Schwäbische Käsespätzle",
    fact: "Nuremburg is home to the face motorsports complex, the Nürburgring",
  }
  ]

  export const useCities = () => {
    return citiesCollection;
  }