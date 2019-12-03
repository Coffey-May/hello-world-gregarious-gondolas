const landmarkComponent = (landmark) => {
  return `
  <div class="landmark__${landmark.class}">
    <button id="button--${landmark.id}">${landmark.name}</button>
  <dialog class="dialog__landmark">
    <h3>${landmark.name}</h3>
    <img class="landmarkdialogpic" src="${landmark.img}"><br>
    <button class="button--close">Close Dialog</button>
  </dialog>
</div>
  `
}

export default landmarkComponent