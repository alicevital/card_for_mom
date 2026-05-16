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

// =========================
// VALIDAÇÃO DO FORM
// =========================

function validateForm() { // validações para a IA não alucinar
  const motherName = document.getElementById("motherName").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const traits = document.getElementById("traits").value.trim();
  const memory = document.getElementById("memory").value.trim();

  if (!motherName || !userName || !traits || !memory) {
    alert("Preencha todos os campos!");
    return false;
  }

  if (traits.length < 5) {
    alert("Descreva melhor as características.");
    return false;
  }

  if (memory.length < 10) {
    alert("Conte uma memória mais detalhada.");
    return false;
  }

  return true;
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

function changeAvatar(element, avatarName) {

  document.getElementById("avatarPreview").src =
    `../../assets/avatar/${avatarName}`;

  // remove seleção
  document
    .querySelectorAll(".avatars-grid img")
    .forEach((img) => {
      img.classList.remove("selected");
    });

  // adiciona seleção
  element.classList.add("selected");
}

console.log("teste");

document.getElementById("accessoryHead")

// nome da mãe e do autor no preview

function updatePreview() {
  const motherName = document.getElementById("motherName").value;
  const userName = document.getElementById("userName").value;

  document.getElementById("previewMotherName").innerText =
    motherName || "Mamãe";

  document.getElementById("previewUserName").innerText =
    userName ? `Com amor, ${userName}` : "Com amor.";
}

// validação para próximo step

function nextStep() {
  if (currentStep === 1 && !validateForm()) return;

  if (currentStep < 4) {
    showStep(currentStep + 1);
  }
}