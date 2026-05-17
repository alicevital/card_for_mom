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

// função de escolher avatar
function changeAvatar(element, avatarName) {

  const avatar = document.getElementById("avatarPreview");

  avatar.src = `../../assets/avatar/${avatarName}`;

  // MOSTRA avatar
  avatar.style.display = "block";

  // remove seleção
  document
    .querySelectorAll(".avatars-grid img")
    .forEach((img) => {
      img.classList.remove("selected");
    });

  // adiciona seleção
  element.classList.add("selected");
}

function removeAvatar() {
  const avatar = document.getElementById("avatarPreview");

  avatar.src = "";
  avatar.style.display = "none";

  // remove seleção dos outros
  document
    .querySelectorAll(".avatars-grid img")
    .forEach((img) => {
      img.classList.remove("selected");
    });
}

console.log("teste");

document.getElementById("accessoryHead")

// nome da mãe e do autor no preview

function updatePreview() {
  const motherName = document.getElementById("motherName").value;
  const userName = document.getElementById("userName").value;

  document.getElementById("previewMotherName").innerText =
    motherName || "Mãe";

  document.getElementById("previewUserName").innerText =
    userName ? `Com amor, ${userName}` : "Com amor.";
}

// validação para próximo step

function nextStep() {
  if (currentStep === 1 && !validateForm()) return;

  if (currentStep < 4) {
    showStep(currentStep + 1);

    if (currentStep + 1 ===4){
      generateMessage();
    }
  }
}

async function downloadPDF() {
  const card = document.querySelector(".card-preview");

  const canvas = await html2canvas(card, {
    scale: 2, // melhora qualidade
  });

  const imgData = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

  pdf.save("cartao-dia-das-maes.pdf");
}

// preview do fundo do card 

window.onload = () => {
  document.querySelector(".card-background").style.backgroundImage =
    "url('../../assets/backgrounds/background1.png')";
};

async function generateMessage() {

  const motherName = document.getElementById("motherName").value;
  const userName = document.getElementById("userName").value;
  const traits = document.getElementById("traits").value;
  const memory = document.getElementById("memory").value;

  document.getElementById("previewMessage").innerText = "Gerando mensagem...";

  try {
    const response = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        motherName,
        userName,
        traits,
        memory,
      }),
    });

    const data = await response.json();

    document.getElementById("previewMessage").innerText = data.message;

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao gerar mensagem");
  }
}