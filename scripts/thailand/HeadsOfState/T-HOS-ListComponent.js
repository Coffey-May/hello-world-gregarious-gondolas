import { useheadsOfState } from "./T-HOS-data-provider.js"
import SingleHosComponent from "./T-HOS-Component.js"

const importedheadsOfState = useheadsOfState()
const headsOfState = document.querySelector(".headsOfState")
headsOfState.innerHTML = `<h3>Heads of State</h3>`
const THOSListComponent = () => {
    for (const singleHos of importedheadsOfState) {
        headsOfState.innerHTML += SingleHosComponent(singleHos)
    }

    
}

export default THOSListComponent
