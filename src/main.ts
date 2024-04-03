// PASO 1 - Crear una constante para generar un número aleatorio
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);
// PASO 2 - Crear una constante que sea numeroParaAcertar (1) y hacerlo igual al número aleatório generado.
const numeroParaAcertar: number = generarNumeroAleatorio();

type Estado =
  |   "NO_ES_UN_NUMERO"
  |   "EL_NUMERO_ES_MAYOR"
  |   "EL_NUMERO_ES_MENOR"
  |   "ES_EL_NUMERO_SECRETO"
  |   "GAME_OVER_MAXIMO_INTENTOS";

const MAXIMO_INTENTOS: number = 5;
let numeroDeIntentos: number = 0;

const hasSuperadoElNumeroMaximoDeIntentos = () : boolean =>
    numeroDeIntentos >= MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
    const elementoItentos = document.getElementById("intentos");

    if(elementoItentos) {
        elementoItentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`
    } else {
        console.error("muestraNumeroDeIntento: No se ha encontrado el elemento con id intento");
    }
}

// Cuando se carga el DOM, poner por pantalla el numero de intentos.
document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

// Lanzar Game Over cuando hayas alcanzado el número MAX de intentos.

const gestionarGameOver = (estado) => {
    if(estado === GAME_OVER_MAXIMO_INTENTOS) {
        document.getElementById("comprobar").disable = true;
    }
}