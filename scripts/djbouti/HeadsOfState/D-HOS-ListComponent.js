import { useheadsOfState } from "./D-HOS-data-provider.js"
import SingleHosComponent from "./D-HOS-Component.js"

const importedheadsOfState = useheadsOfState()
const headsOfState = document.querySelector(".headsOfState")
headsOfState.innerHTML = `<h3>Heads of State</h3>`
const DHOSListComponent = () => {
    for (const singleHos of importedheadsOfState) {
        headsOfState.innerHTML += SingleHosComponent(singleHos)
    }

    
}

export default DHOSListComponent
