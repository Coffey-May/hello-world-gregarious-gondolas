const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")
  
    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
  //Details on Bangkok
    document.querySelector("#button--tadj").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__tadj")
            theDialog.showModal()
        }
    )
  //Details on Chiang Mai
    document.querySelector("#button--obock").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__obock")
            theDialog.showModal()
        }
    )
  //Details on Pattaya City
    document.querySelector("#button--dikhil").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__dikhil")
            theDialog.showModal()
        }
    )
  //Details on Phra
    document.querySelector("#button--arta").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__arta")
            theDialog.showModal()
        }
    )
  //Details on Chiang Rai
    document.querySelector("#button--ali").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__ali")
            theDialog.showModal()
        }
    )
  
  }
  export default initializeDetailButtonEvents