// Variables can make our JS more DRY: https://www.w3schools.com/js/js_variables.asp
var pearlDiv = document.getElementById("pearl");

function everythingElseOrange() {
  // remove the old colors
  pearlDiv.classList.remove("purple");
  document.getElementById("rosie").classList.remove("red");
  document.getElementById("bruce").classList.remove("black");
  document.getElementById("grace").classList.remove("dark-grey");
  document.getElementById("larry").classList.remove("light-grey");

  // add orange
  pearlDiv.classList.add("orange");
  document.getElementById("rosie").classList.add("orange");
  document.getElementById("bruce").classList.add("orange");
  document.getElementById("grace").classList.add("orange");
  document.getElementById("larry").classList.add("orange");
}

function everythingElseDisappearCompletely() {
  document.getElementById("oscar").classList.remove("box");
  document.getElementById("oscar").classList.remove("orange");
  document.getElementById("rosie").classList.remove("box");
  document.getElementById("rosie").classList.remove("red");
  document.getElementById("bruce").classList.remove("box");
  document.getElementById("bruce").classList.remove("black");
  document.getElementById("gary").classList.remove("box");
  document.getElementById("gary").classList.remove("green");
  document.getElementById("grace").classList.remove("box");
  document.getElementById("grace").classList.remove("dark-grey");
  document.getElementById("larry").classList.remove("box");
  document.getElementById("larry").classList.remove("light-grey");
}
function everythingElseGreen() {
  document.getElementById("pearl").classList.add("green");
  document.getElementById("pearl").classList.remove("purple");
  document.getElementById("oscar").classList.add("green");
  document.getElementById("oscar").classList.remove("orange");

  document.getElementById("rosie").classList.remove("orange");
  document.getElementById("bruce").classList.remove("black");
  document.getElementById("grace").classList.remove("dark-grey");
  document.getElementById("larry").classList.remove("light-grey");

  pearlDiv.classList.add("green");
  document.getElementById("bruce").classList.add("green");
  document.getElementById("grace").classList.add("green");
  document.getElementById("larry").classList.add("green");
}
function makeTall() {
  document.getElementById("gary").classList.remove("box");
  document.getElementById("gary").classList.add("tallbox");
  document.getElementById("rosie").classList.remove("box");
  document.getElementById("rosie").classList.add("tallbox");
  document.getElementById("bruce").classList.remove("box");
  document.getElementById("bruce").classList.add("tallbox");
  document.getElementById("grace").classList.remove("box");
  document.getElementById("grace").classList.add("tallbox");
  document.getElementById("pearl").classList.remove("box");
  document.getElementById("pearl").classList.add("tallbox");
  document.getElementById("larry").classList.remove("box");
  document.getElementById("larry").classList.add("tallbox");
}
function turnOrangeDirect() {
  document.getElementById("images/palmeiras.png").style.backgroundColor =
    "#008d24";
}
function changeMiddleImageDirect() {
  document.getElementById("images/palmeiras.png").style.backgroundImage =
    "images/images/Screenshot 2025-11-21 103752.png";
}
function changeImageDirect() {
  var img = document.getElementById("middleImage");
  img.src = "images/Screenshot 2025-11-21 103752.png";
}

function changeImageDirect() {
  var img = document.getElementById("middleImage");
  img.src = "images/Screenshot 2025-11-21 103752.png";
}
function changeMiddleImageDirect() {
  document.getElementById("images/palmeiras.png").style.backgroundImage =
    "images/images/Screenshot 2025-11-21 103752.png";
}
// Trocar imagem do meio clicando na imagem da direita superior
function changeMiddleFromRight() {
  var middleImg = document.getElementById("middleImage");
  middleImg.src = "images/Screenshot 2025-11-21 103752.png";
}
// Trocar imagem do meio ao clicar na imagem superior da direita
function changeMiddleFromRightTop() {
  document.getElementById("middleImage").src =
    "images/Screenshot 2025-11-21 103752.png";
}

// Trocar imagem do meio ao clicar na imagem inferior da direita
function changeMiddleFromRightBottom() {
  document.getElementById("middleImage").src =
    "images/Screenshot 2025-11-21 104501.png";
}

// Trocar imagem do meio ao clicar na imagem superior da esquerda
function changeMiddleFromLeftTop() {
  document.getElementById("middleImage").src =
    "images/Screenshot 2025-11-21 103144.png";
}
// 1. Mostra um GIF no meio
function showGif() {
  let middle = document.getElementById("middleImage");
  middle.src = "images/Fla Sep GIF.gif"; // coloque o nome do seu GIF aqui
}

// 2. Toca a música
function playMusic() {
  document.getElementById("myMusic").play();
}

// 3. Deixa TODAS as imagens iguais à imagem superior direita
function setAllImagesToRightTop() {
  let rightTopSrc = document.getElementById("rightTopImage").src;

  // Lista de todas as imagens da página
  let all = document.querySelectorAll("img");

  all.forEach((img) => {
    img.src = rightTopSrc;
  });
}
