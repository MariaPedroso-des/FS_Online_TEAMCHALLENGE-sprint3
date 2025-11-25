const botones = document.querySelectorAll('[data-jugada]'),
  resultsContainer  = document.getElementById ('resultados')

let contadorUsuario = document.getElementById('contador-usuario'),
  contadorOrdenador = document.getElementById('contador-ordenador')

//lo primero que he hecho es guardar en un array el NodeList del DOM, recorro con el forEach y guardo en el array jugadas que tengo libre para esto.
let jugadas = []

botones.forEach(boton => {
  jugadas.push(boton.dataset.jugada)
})


jugadaUser.addEventListener('click', () => {
  const jugadaUser = boton.dataset.jugada;
  const jugadaComputer = jugadas[Math.floor(Math.random() * jugadas.length)];
}) if (jugadaUser === jugadaComputer) {

} else if(jugadaUser > jugadaComputer) {

} else (jugadaUser < jugadaComputer) {

}

.then (resultsContainer.innerHTML = `Tu elección ha sido: ${jugadaUser} y la de la máquina: ${jugadaComputer}`)















//necesito una línea de texto con el resultado de los dos jugadores: