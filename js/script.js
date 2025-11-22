const botones = document.querySelectorAll('.boton-jugada')
const resultsContainer = document.getElementById ('resultados')
let contadorUsuario = document.getElementById('contador-usuario')
let contadorOrdenador = document.getElementById('contador-ordenador')
let puntosUsuario = 0
let puntosOrdenador = 0

const piedra = 0
const papel = 2
const tijera = 1

const valorJugada= { // esto me hace de traductor de string a number
piedra: 0,
papel: 2,
tijera: 1,
}

const empate = 0
const ganar = 1
const perder = 2

botones.forEach(boton => {
  boton.addEventListener('click', (event) => { 
    const jugadaenString = event.target.dataset.jugada
    const jugadaenNumeros = valorJugada[jugadaenString]

      play((jugadaenNumeros))
  })    
})

function play (usuarioOpcion) {
  const numeroRandom = Math.floor(Math.random() * 3);
  const ordenadorOpcion = numeroRandom
  if (usuarioOpcion === ordenadorOpcion) {
      return empate;
  } else if (
    (usuarioOpcion === piedra && ordenadorOpcion === tijera) 
    || (usuarioOpcion === papel && ordenadorOpcion === piedra) 
    || (usuarioOpcion === tijera && ordenadorOpcion === papel)) {
    return ganar;
  } else if (
    (ordenadorOpcion === piedra && usuarioOpcion === tijera ) 
    || (ordenadorOpcion === papel && usuarioOpcion === piedra) 
    || (ordenadorOpcion === tijera && usuarioOpcion === papel)) {
    return perder;
  }
}

const resultado = play()
if (resultado === ganar) {
    puntosUsuario++;
  } else if ( resultado === perder) {
    puntosOrdenador++;
  } 
contadorUsuario.innerText = `${puntosUsuario}`
contadorOrdenador.innerText = `${puntosOrdenador}`