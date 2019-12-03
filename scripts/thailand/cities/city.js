const citiesComponent = (city) => {
  return `
    <div class="city">
        <button id="button--${city.id}">${city.name}</button>
        <dialog class="dialog--city" id="details--${city.id}">
            <img src="${city.image}">
            <div>Population: ${city.population}</div>
            <div>Attractions: ${city.attractions}</div>
            <div>Food: ${city.food}</div>
            <div>Fact: ${city.fact}</div>
            <button class="button--close">Close Dialog</button>
        </dialog>
    </div>
`
}

export default citiesComponent