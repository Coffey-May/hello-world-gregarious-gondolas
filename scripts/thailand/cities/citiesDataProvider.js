const citiesCollection = [
  {
    id: "Bangkok",
    name: "Bangkok",
    population:  "8.2 million",
    attractions: "Over 400 temples! Including Wat Arun!",
    food: "fried chicken, sweet potato balls, fried banana pancake",
    fact: "Red Bull was originally made in Bangkok",
  },
  {
    id: "ChiangMai",
    name: "Chiang Mai",
    image: "./Photos/berlin.jpg",
    population: "131, 000",
    attractions: "The striking mountain landscapes",
    food: "Khao Soi Khun Yai, Suki Koka, Khao Soi",
    fact: "70% of Chiang Mai is covered by mountains and vegetation."
  },
  {
    id: "PattayaCity",
    name: "Pattaya City",
    population: "320,000",
    attractions: "The floating market",
    food: "Kai jeow, moo ping, Som Tum",
    fact: "Pattaya is commonly referred to as 'Sin City'",
  },
  {
    id: "PhraNakhonSiAyutthaya",
    name: "Phra Nakhon Si Ayutthaya",
    population: "53,000",
    attractions: "Archaeological sites",
    food: "king prawns, boat noodles, ayutthaya iced coffee",
    fact: "Ayutthaya is the former capital of Thailand"
  },
  {
    id: "ChiangRai",
    name: "Chiang Rai",
    population: "69,000",
    attractions: "The Monkey Temple",
    food: "sai ooa, nam prik, fruit juices",
    fact: "Chiang Rai is known as a city of arts"
  },
  ]

  export const useCities = () => {
    return citiesCollection;
  }