const txtpuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");
const puntajeFinal = document.querySelector("#puntaje-final");
const totalAcertadas = document.querySelector("#total-acertadas");
const totalNoAcertadas = document.querySelector("#total-no-acertadas");
const btnComenzar = document.querySelector("#btn-comenzar");

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");
txtpuntaje.innerHTML = localStorage.getItem("puntaje-total");
puntajeFinal.innerHTML = localStorage.getItem("puntaje-total") + " Puntos";

const correctas = parseInt(localStorage.getItem("puntaje-total"))/ 10;
const incorrecta = 60 - correctas;

totalAcertadas.innerHTML = correctas;
totalNoAcertadas.innerHTML = incorrecta;


btnComenzar.addEventListener("click", ()=>{
    location.href = "./index.html";
})



