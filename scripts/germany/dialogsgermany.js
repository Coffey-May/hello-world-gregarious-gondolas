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
//Details on berlin
  document.querySelector("#button--berlin").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__berlin")
          theDialog.showModal()
      }
  )
//Details on Hamburg
  document.querySelector("#button--ham").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__ham")
          theDialog.showModal()
      }
  )
//Details on Nuremburg
  document.querySelector("#button--nurem").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__nurem")
          theDialog.showModal()
      }
  )

}
export default initializeDetailButtonEvents