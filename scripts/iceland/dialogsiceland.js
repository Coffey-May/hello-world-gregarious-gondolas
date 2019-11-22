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
//Details on Reykjavik  
  document.querySelector("#button--rey").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__rey")
          theDialog.showModal()
      }
  )
 
}
export default initializeDetailButtonEvents