import { useLandmarks } from "./DjiboutiLandmarksDataProvider.js"
import landmarkComponent from "./DjiboutiLandmarks.js"


const LandmarkListComponent = () =>{

const contentElement = document.querySelector(".landmarklist")
const landmarks = useLandmarks()

  contentElement.innerHTML +=
    `
    <h3>Landmarks of Djibouti</h3>
    ${
      landmarks.map(
        (landmark) => {
          return landmarkComponent(landmark)
        }
      ).join(" ")
    }
    `
  }
  


export default LandmarkListComponent
