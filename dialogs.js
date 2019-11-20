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
  document.querySelector("#button--bang").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__bang")
          theDialog.showModal()
      }
  )
//Details on Chiang Mai
  document.querySelector("#button--chiang").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__chiang")
          theDialog.showModal()
      }
  )
//Details on Bangkok
  document.querySelector("#button--bang").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__bang")
          theDialog.showModal()
      }
  )
//Details on Bangkok
  document.querySelector("#button--bang").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__bang")
          theDialog.showModal()
      }
  )
//Details on Bangkok
  document.querySelector("#button--bang").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__bang")
          theDialog.showModal()
      }
  )

}
export default initializeDetailButtonEvents