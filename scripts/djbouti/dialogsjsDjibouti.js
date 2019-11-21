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
    document.querySelector("#button--djbouti").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details__djbouti")
            theDialog.showModal()
        }
    )
  
  }
  export default initializeDetailButtonEvents