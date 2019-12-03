import { useCities } from "./citiesDataProvider.js";
import citiesComponent from "./city.js";
const citiesListComponent = () => {
const content = document.querySelector(".cities");
const cities = useCities();
content.innerHTML +=
  `<h3>Cities of Djbouti</h3>
  ${
    cities.map(
      (city) => {
        return citiesComponent(city)
      }
    ).join(" ")
  }
  `
}
export default citiesListComponent;