import { useLandmarks } from "./GermanyLandmarksDataProvider.js"
import landmarkComponent from "./GermanyLandmark.js"


const LandmarkListComponent = () =>{

const contentElement = document.querySelector(".landmarklist")
const landmarks = useLandmarks()

  contentElement.innerHTML +=
    `
    <h3>Landmarks of Germany</h3>
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

