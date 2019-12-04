const landmarkComponent = (landmark) => {
  return `
  <div class="landmark__${landmark.id}">
    <button id="button--${landmark.id}" class="button--landmark">${landmark.name}</button>
  <dialog class="dialog__landmark">
    <h3 class="dialog__header">${landmark.name}</h3>
    <img class="landmarkdialogpic button--close" src="${landmark.img}"><br>
  </dialog>
</div>
  `
}

export default landmarkComponent