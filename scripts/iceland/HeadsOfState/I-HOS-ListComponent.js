import { useheadsOfState } from "./I-HOS-data-provider.js"
import SingleHosComponent from "./I-HOS-Component.js"

const importedheadsOfState = useheadsOfState()
const headsOfState = document.querySelector(".headsOfState")
headsOfState.innerHTML = `<h3>Heads of State</h3>`
const IHOSListComponent = () => {
    for (const singleHos of importedheadsOfState) {
        headsOfState.innerHTML += SingleHosComponent(singleHos)
    }

    
}

export default IHOSListComponent
