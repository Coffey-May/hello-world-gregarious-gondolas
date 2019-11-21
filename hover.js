const addMouseOverEventListeners = () => {

  const headImage = document.querySelectorAll(".head__of__state__img");
  
  for (const pic of headImage) {
    pic.addEventListener("mouseover", theMouseOverEvent => {
     
      pic.classList.add("remove__image");
    });
    pic.addEventListener("mouseout", theMouseOutEvent => {
     
      pic.classList.remove("remove__image");
    });
  }
}

const addMouseOverEventListenersText = () =>{
  const textInfo = document.querySelectorAll{".head__of__state__info"};
  for (const text of textInfo) {
    text.addEventListener("mouseover", theMouseOverEvent => {
     
      text.classList.add("text__appear");
    });
    text.addEventListener("mouseout", theMouseOutEvent => {
     
      text.classList.remove("text__appear");
    });
  }
}
export default addMouseOverEventListenersText;
export default addMouseOverEventListeners;