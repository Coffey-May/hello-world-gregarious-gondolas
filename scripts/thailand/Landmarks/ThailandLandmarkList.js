import { useLandmarks } from "./ThailandLandmarkDataProviders.js"
import landmarkComponent from "./ThailandLandmark.js"

const LandmarkListComponent = () =>{

const contentElement = document.querySelector(".landmarklist")
const landmarks = useLandmarks()

  contentElement.innerHTML +=
    `
    <h2>Landmarks of Thailand</h2>
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


