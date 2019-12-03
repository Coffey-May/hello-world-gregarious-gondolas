import { useheadsOfState } from "./G-HOS-data-provider.js"
import SingleHosComponent from "./G-HOS-Component.js"

const importedheadsOfState = useheadsOfState()
const headsOfState = document.querySelector(".headsOfState")
headsOfState.innerHTML = `<h3>Heads of State</h3>`
const GHOSListComponent = () => {
    for (const singleHos of importedheadsOfState) {
        headsOfState.innerHTML += SingleHosComponent(singleHos)
    }

    
}

export default GHOSListComponent
