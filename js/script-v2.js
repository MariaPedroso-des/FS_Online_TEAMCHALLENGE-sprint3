const botones = document.querySelectorAll('[data-jugada]'),
  resultsContainer  = document.getElementById ('resultados')

let contadorUsuario = document.getElementById('contador-usuario'),
  contadorOrdenador = document.getElementById('contador-ordenador')

//Lo primero que he hecho es guardar en un array el NodeList del DOM, recorro con el forEach y guardo en el array jugadas que tengo libre para esto.
let jugadas = []
let puntosUser = 0
let puntosComputer = 0

//Con el forEach recorro los tres botones por separado, el evento ocurre dentro porque tiene que ocurrir cada vez que pulsamos un botón.
//Las condiciones tb tendrán que ir dentro, porque lo he declarado todo de lo que depende ahí dentro.
botones.forEach(boton => {
  jugadas.push(boton.dataset.jugada)
  boton.addEventListener('click', () => {
    const jugadaUser = boton.dataset.jugada;
    const jugadaComputer = jugadas[Math.floor(Math.random() * jugadas.length)];
    if (jugadaUser === jugadaComputer) {
      resultsContainer.innerHTML = `Tu elección ha sido: ${jugadaUser} y la de la máquina: ${jugadaComputer}`
    } else if(jugadaUser === 'tijera' && jugadaComputer === 'papel' ||
              jugadaUser === 'papel' && jugadaComputer === 'piedra' ||
              jugadaUser === 'piedra' && jugadaComputer === 'tijera') 
    {
      puntosUser++;
      contadorUsuario.innerHTML = `Tus puntos: ${puntosUser}`;
      resultsContainer.innerHTML = `Tu elección ha sido: ${jugadaUser} y la de la máquina: ${jugadaComputer}`
    } else {
      puntosComputer++;
      contadorOrdenador.innerHTML = `Puntos de la máquina: ${puntosComputer}`;
      resultsContainer.innerHTML = `Tu elección ha sido: ${jugadaUser} y la de la máquina: ${jugadaComputer}`
    }
  })
})









//los puntos se deben guardar en alguna parte
//se tienen que sumar los de cada uno
//se tienen que mostrar en pantalla
