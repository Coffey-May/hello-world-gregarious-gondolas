import { useLandmarks } from "./IcelandLandmarksDataProvider.js"
import landmarkComponent from "./IcelandLandmark.js"


const LandmarkListComponent = () =>{

const contentElement = document.querySelector(".landmarklist")
const landmarks = useLandmarks()

  contentElement.innerHTML +=
    `
    <h3>Landmarks of Iceland</h3>
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

