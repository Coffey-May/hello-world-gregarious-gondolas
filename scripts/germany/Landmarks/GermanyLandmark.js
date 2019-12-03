const landmarkComponent = (landmark) => {
  return `
  <div class="landmark__${landmark.class}">
  <div>
    <button id="button--${landmark.id}">${landmark.name}</button>
  </div>
  <dialog class="dialog__landmark">
    <h3>${landmark.name}</h3>
    <img src="${landmark.img}"
    <button class="button--close">Keep Exploring</button>
  </dialog>
</div>
  `
}

export default landmarkComponent