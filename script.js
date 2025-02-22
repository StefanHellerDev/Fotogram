let images = [
  "bird-1541272_1920",
  "bow-river-1542100_1920",
  "deer-5602925_1920",
  "flower-1643236_1920",
  "motorcycle-1540014_1920",
  "mountain-4424657_1920",
  "patricia-lake-3503009_1920",
  "sandstone-1702052_1920",
  "sandstone-1702053_1920",
  "sea-lion-4430693_1920",
  "snowbirds-1544595_1920",
  "whale-watching-4430682_1920",
];

let imagesSmall = [
  "bird-1541272_1920_small",
  "bow-river-1542100_1920_small",
  "deer-5602925_1920_small",
  "flower-1643236_1920_small",
  "motorcycle-1540014_1920_small",
  "mountain-4424657_1920_small",
  "patricia-lake-3503009_1920_small",
  "sandstone-1702052_1920_small",
  "sandstone-1702053_1920_small",
  "sea-lion-4430693_1920_small",
  "snowbirds-1544595_1920_small",
  "whale-watching-4430682_1920_small",
];

iMax = imagesSmall.length;

function init() {
  let fotogram = document.getElementById("fotogramMain");
  for (let i = 0; i < imagesSmall.length; i++) {
    fotogram.innerHTML += `<div><img class="grow" src="./img/${imagesSmall[i]}.jpg" onclick="switchOnOverlay(${i})"></div>`;
  }
}

function switchOnOverlay(i) {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.remove("d_none");
  let dialogRef = document.getElementById("dialog");
  dialogRef.innerHTML = showBigPicture(i);
}

function showBigPicture(i) {
  if (i < 0) {
    i = iMax - 1;
  } else if (i == iMax) {
    i = 0;
  }

  return `<div class="dialogHeader">
          <h2>${images[i]}</h2>
          <span class="dialogClose" onclick="switchOffOverlay()">&times;</span>
        </div>
        <div class="imageBox">
        <img class="dialogImage" src="./img/${images[i]}.jpg" alt="${
    images[i]
  }">
  </div>
        <div class="dialogNav">
          <img src="./img/arrow_circle_left_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Arrow Circle Left"
            id="dialogArrowLeft" onclick="switchOnOverlay(${i - 1})">
            <h3>${i + 1} &#47; ${iMax}</h3>
          <img src="./img/arrow_circle_right_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Arrow Circle Right"
            id="dialogArrowRight" onclick="switchOnOverlay(${i + 1})">
        </div>`;
}

function switchOffOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.add("d_none");
}

function bubblingPropagation(event) {
  event.stopPropagation();
}
