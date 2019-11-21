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
//Details on Pattaya City
  document.querySelector("#button--pattaya").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__pattaya")
          theDialog.showModal()
      }
  )
//Details on Phra
  document.querySelector("#button--phra").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__phra")
          theDialog.showModal()
      }
  )
//Details on Chiang Rai
  document.querySelector("#button--rai").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details__rai")
          theDialog.showModal()
      }
  )

}
export default initializeDetailButtonEvents