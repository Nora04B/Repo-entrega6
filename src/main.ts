let puntuacion = 0;

let juegoTerminado = false;

const muestraPuntuacion = () => {
  document.getElementById("puntuacion").innerHTML = `Puntuación: ${puntuacion}`;
};

const dameCarta = (): number => {
  let carta = Math.floor(Math.random() * 10) + 1;

  if (carta > 7) {
    carta = carta + 2;
  }

  return carta;
};

const obtenerUrlCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"/;

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg".;
  }
};

const muestraCarta = (carta: number): void => {
  const urlCarta = obtenerUrlCarta(carta);

  document.getElementById("carta").src = urlCarta;
};

const obtenerPuntuacionCarta = (carta: number): number => {
  if (carta === 10 || carta === 11 || carta === 12) {
    return 0.5;}

  return carta;
};

const pideCarta = () => {
  if (juegoTerminado) {
    return;}

  const carta = dameCarta();

  muestraCarta(carta);

  const puntuacionCarta = obtenerPuntuacionCarta(carta);

  puntuacion = puntuacion + puntuacionCarta;
  muestraPuntuacion();
  comprobarGameOver();
};

const comprobarGameOver = () => {
  if (puntuacion > 7.5) {
    juegoTerminado = true;

    document.getElementById("mensaje").innerHTML =
      "Game Over";

    document.getElementById("pedir-carta").disabled = true;

    document.getElementById("plantarse").disabled = true;

    document.getElementById("nueva-partida").disabled = false;
  }
};

const mePlanto = () => {
  if (juegoTerminado) {
    return;}

  juegoTerminado = true;
  document.getElementById("pedir-carta").disabled = true;

  document.getElementById("plantarse").disabled = true;

  document.getElementById("nueva-partida").disabled = false;

  if (puntuacion < 4) {
    document.getElementById("mensaje").innerHTML = "Te has quedado lejos";
  } else if (puntuacion === 5) {
    document.getElementById("mensaje").innerHTML =
      "Te ha entrado el canguelo eh?";
  } else if (puntuacion === 6 || puntuacion === 7) {
    document.getElementById("mensaje").innerHTML = "Casi";
  } else if (puntuacion === 7.5) {
    document.getElementById("mensaje").innerHTML =
      "Enhorabuena!";
  }
};

const nuevaPartida = () => {
  puntuacion = 0;

  juegoTerminado = false;
muestraPuntuacion();

  document.getElementById("mensaje").innerHTML = "";

  document.getElementById("carta").src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

  document.getElementById("pedir-carta").disabled = false;

  document.getElementById("plantarse").disabled = false;

  document.getElementById("nueva-partida").disabled = true;'
};

const botonPedirCarta = document.getElementById("pedir-carta");

botonPedirCarta.addEventListener("click", pideCarta);

const botonPlantarse = document.getElementById("plantarse");

botonPlantarse.addEventListener("click", mePlanto);
const botonNuevaPartida = document.getElementById("nueva-partida");

botonNuevaPartida.addEventListener("click", nuevaPartida);
document.addEventListener("DOMContentLoaded", muestraPuntuacion);.
