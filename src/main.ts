import "./style.css";

let turnoActual = 0;

const actualizarPantalla = () => {
  const textoTurno = turnoActual.toString().padStart(2, "0");
  document.getElementById("numero-turno")!.innerHTML = textoTurno;
};

const sumar = () => {
  turnoActual++;
  actualizarPantalla();
};

const restar = () => {
  if (turnoActual > 0) {
    turnoActual--;
  }
  actualizarPantalla();
};

const reset = () => {
  turnoActual = 0;
  actualizarPantalla();
};

const botonSumar = document.getElementById("sumar")!;
const botonRestar = document.getElementById("restar")!;
const botonReset = document.getElementById("reset")!;
botonSumar.addEventListener("click", sumar);

botonRestar.addEventListener("click", restar);

botonReset.addEventListener("click", reset);

actualizarPantalla();
