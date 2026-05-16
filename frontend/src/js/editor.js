// PASSO ATUAL

let currentStep = 1;


// FUNÇÃO PARA MOSTRAR STEP

function showStep(stepNumber) {

  // REMOVE ACTIVE DE TODOS

  document
    .querySelectorAll(".step")
    .forEach((step) => {
      step.classList.remove("active");
    });


  // ATIVA O STEP CORRETO

  document
    .getElementById(`step${stepNumber}`)
    .classList.add("active");


  // ATUALIZA STEP ATUAL

  currentStep = stepNumber;
}


// PRÓXIMO STEP

function nextStep() {

  if (currentStep < 4) {
    showStep(currentStep + 1);
  }

}


// STEP ANTERIOR

function previousStep() {

  if (currentStep > 1) {
    showStep(currentStep - 1);
  }

}

function changeBackground(element, backgroundName) {

  // TROCA O BACKGROUND

  document.querySelector(
    ".card-background"
  ).style.backgroundImage =
    `url('../../assets/backgrounds/${backgroundName}')`;


  // REMOVE SELECTED

  document
    .querySelectorAll(".background-option")
    .forEach((option) => {
      option.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}

// =========================
// SKIN
// =========================

function changeSkin(element, skinName) {

  // TROCA IMAGEM

  document.getElementById(
    "skin"
  ).src =
    `../../assets/avatar/skins/${skinName}`;


  // REMOVE SELECTED

  document
    .querySelectorAll(
      ".skins-grid img"
    )
    .forEach((img) => {
      img.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}


// =========================
// HAIR
// =========================

function changeHair(element, hairName) {

  // TROCA IMAGEM

  document.getElementById(
    "hair"
  ).src =
    `../../assets/avatar/hairs/${hairName}`;


  // REMOVE SELECTED

  document
    .querySelectorAll(
      ".hairs-grid img"
    )
    .forEach((img) => {
      img.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}


// =========================
// FACE
// =========================

function changeFace(element, faceName) {

  // TROCA IMAGEM

  document.getElementById(
    "face"
  ).src =
    `../../assets/avatar/faces/${faceName}`;


  // REMOVE SELECTED

  document
    .querySelectorAll(
      ".faces-grid img"
    )
    .forEach((img) => {
      img.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}


// =========================
// ACCESSORY
// =========================

// =========================
// HEAD ACCESSORY
// =========================

function changeHeadAccessory(element, accessoryName) {

  // TROCA IMAGEM

  document.getElementById(
    "accessoryHead"
  ).src =
    `../../assets/avatar/accessories/head/${accessoryName}`;


  // REMOVE SELECTED

  document
    .querySelectorAll(
      ".head-grid img"
    )
    .forEach((img) => {
      img.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}

// =========================
// NECK ACCESSORY
// =========================

function changeNeckAccessory(element, accessoryName) {

  // TROCA IMAGEM

  document.getElementById(
    "accessoryNeck"
  ).src =
    `../../assets/avatar/accessories/neck/${accessoryName}`;


  // REMOVE SELECTED

  document
    .querySelectorAll(
      ".neck-grid img"
    )
    .forEach((img) => {
      img.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}

// =========================
// SHIRTS
// =========================

function changeShirt(element, shirtName) {

  // TROCA IMAGEM

  document.getElementById(
    "shirt"
  ).src =
    `../../assets/avatar/accessories/tshirts/${shirtName}`;

      console.log(path);
  // REMOVE SELECTED

  document
    .querySelectorAll(
      ".shirts-grid img"
    )
    .forEach((img) => {
      img.classList.remove("selected");
    });


  // ADICIONA SELECTED

  element.classList.add("selected");

}

console.log("teste");

document.getElementById("accessoryHead")