
// CLASES
class Diccionario{
  constructor(palabrasArray){
    this.palabrasArray = palabrasArray;
  }

  getSet(){
    let set = [];
    for(const letra in this.palabrasArray){
      // toma elementos aleatorios.
      set[letra] = this.palabrasArray[letra][parseInt(Math.random()*this.palabrasArray[letra].length)];
    }
    // console.log(set);
    return set;
  }
}

class Rosco{
  constructor(setPalabras){
    this.setPalabras = setPalabras;
    this.punteroLetra = 0;
    this.punteroLetraActual = 0;
    this.punteroLetraSiguiente = 1;
    this.punteroLetraAnterior = 25;
    this.letrasRestantes = Object.keys(setPalabras);
    this.isActive = false;
  }
  

  render(){
    let divRosco = document.getElementById("rosco");
    let rosco = `
      <button id="circulo-a" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ring-4 ring-fuchsia-400 dark:ring-fuchsia-400 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 0px; right: 250px">A</button>
      <button id="circulo-b" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 7.26px; right: 190.17px">B</button>
      <button id="circulo-c" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 28.63px; right: 133.81px">C</button>
      <button id="circulo-d" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 62.87px; right: 84.21px">D</button>
      <button id="circulo-e" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 107.98px; right: 44.25px">E</button>
      <button id="circulo-f" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 161.34px; right: 16.24px">F</button>
      <button id="circulo-g" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 219.86px; right: 1.82px">G</button>
      <button id="circulo-h" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 219.86px; right: 1.82px">H</button>
      <button id="circulo-i" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-[20px] py-2 text-center" style="bottom: 161.34px; right: 16.24px">I</button>
      <button id="circulo-j" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 107.98px; right: 44.25px">J</button>
      <button id="circulo-k" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 62.87px; right: 84.21px">K</button>
      <button id="circulo-l" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 28.63px; right: 133.81px">L</button>
      <button id="circulo-m" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 7.26px; right: 190.17px">M</button>
      <button id="circulo-n" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 0px; left: 250px">N</button>
      <button id="circulo-ñ" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 7.26px; left: 190.17px">Ñ</button>
      <button id="circulo-o" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 28.63px; left: 133.81px">O</button>
      <button id="circulo-p" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 62.87px; left: 84.21px">P</button>
      <button id="circulo-q" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 107.98px; left: 44.25px">Q</button>
      <button id="circulo-r" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 161.34px; left: 16.24px">R</button>
      <button id="circulo-s" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 219.86px; left: 1.82px">S</button>
      <button id="circulo-t" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 219.86px; left: 1.82px">T</button>
      <button id="circulo-u" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 161.34px; left: 16.24px">U</button>
      <button id="circulo-v" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 107.98px; left: 44.25px">V</button>
      <button id="circulo-x" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 62.87px; left: 84.21px">X</button>
      <button id="circulo-y" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 28.63px; left: 133.81px">Y</button>
      <button id="circulo-z" disabled class="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-[#2056df] font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 7.26px; left: 190.17px">Z</button>
    `;
    divRosco.innerHTML = rosco;
  }

  setVerde(letra){
    document.getElementById(`circulo-${letra}`).classList.add("from-green-500", "via-green-600", "to-green-700", "focus:ring-green-300", "shadow-[#158f43]");
    document.getElementById(`circulo-${letra}`).classList.remove("from-blue-500", "via-blue-600", "to-blue-700", "focus:ring-blue-300", "shadow-[#2056df]");
  };

  setRojo(letra){
    document.getElementById(`circulo-${letra}`).classList.add("from-red-500", "via-red-600", "to-red-700", "focus:ring-red-300", "shadow-[#c92020]");
    document.getElementById(`circulo-${letra}`).classList.remove("from-blue-500", "via-blue-600", "to-blue-700", "focus:ring-blue-300", "shadow-[#2056df]");
  };

  setFocus(letra){
    document.getElementById(`circulo-${letra}`).classList.add("ring-4", "ring-fuchsia-400", "dark:ring-fuchsia-400");
  }

  lostFocus(letra){
    document.getElementById(`circulo-${letra}`).classList.remove("ring-4", "ring-fuchsia-400", "dark:ring-fuchsia-400");
  }

  saltaPalabra(){
    (this.punteroLetra == this.letrasRestantes.length - 1)? this.punteroLetra = 0 : this.punteroLetra++;
    return this.letrasRestantes.at(this.punteroLetra);
  }

  removerDeLetrasRestantes(indexLetraARemover){
    this.letrasRestantes.splice(indexLetraARemover, 1);
  }
};

// FUNCIONES UTILES

function show(element){
  switch (element) {
    case "menu":
      let menu = document.getElementById("menu-nuevo-juego");
      menu.classList.remove("hidden");
      break;

    case "rosco":
      let rosco = document.getElementById("div-rosco");
      rosco.classList.remove("hidden");
      break;

    case "juego":
      // let saludoJugador = document.getElementById("saludo-jugador");
      saludoJugador.innerHTML = `Buena suerte ${jugador1}! &#127808;`
      // let juego = document.getElementById("menu-juego");
      juego.classList.remove("hidden");
      break;

    case "top10":
      let top10 = document.getElementById("tabla-top10");
      let tablaTop10 = document.getElementById("tabla-top10-jugadores");
      let tablaTop10Listado = "";
      top10.classList.remove("hidden");
      // cargar el top10 desde el storage
      let top10FromLocalStorage = JSON.parse(localStorage.getItem("top10Rosco"));
      // ordenar el top10
      ordenaTop10(top10FromLocalStorage);
      // genera el contenido html de top10
      for (const jugador in top10FromLocalStorage){
        tablaTop10Listado += `
        <div class="table-row first:bg-[#FFD700] odd:bg-none even:bg-blue-100">
          <div class="table-cell p-3">${parseInt(jugador) + 1}</div>
          <div class="table-cell p-3">${top10FromLocalStorage[jugador].nombre}</div>
          <div class="table-cell p-3 text-right">${top10FromLocalStorage[jugador].marcador.correctas}</div>
        </div>`;
      };
      tablaTop10.innerHTML = tablaTop10Listado;
      break;

    default:
      console.error("No existe el elemento: ", element);
  }
}

function hide(element){
  switch (element) {
    case "menu":
      let menu = document.getElementById("menu-nuevo-juego");
      menu.classList.add("hidden");
      break;
    case "rosco":
      let rosco = document.getElementById("div-rosco");
      rosco.classList.add("hidden");
      break;
    case "juego":
      let juego = document.getElementById("menu-juego");
      juego.classList.add("hidden");
      break;
    case "top10":
      let top10 = document.getElementById("tabla-top10");
      top10.classList.add("hidden");
      break;
    default:
      console.error("No existe el elemento: ", element);
  }
}

async function nuevoJugador() {
  const { value: nombre } = await Swal.fire({
    title: 'Ingresá tu nombre',
    input: 'text',
    inputPlaceholder: 'tu nombre',
    showCancelButton: true,
    confirmButtonText: 'Jugar',
    cancelButtonText: 'Cancelar',
    inputValidator: (value) => {
      if (!value) {
        return 'Debes ingresar un nombre'
      }
    }
  })

  if (nombre) {
    jugador1 = nombre;
    localStorage.setItem("jugadorRosco", JSON.stringify({nombre: jugador1, marcador: marcador1}));
    hide("menu");
    Swal.fire({
      title: "Preparate...",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      willClose: () => {
        show("juego");
      },
    })
  }
}

function finalizarJuego(){
  let top10FromLocalStorage = JSON.parse(localStorage.getItem("top10Rosco")) || [];
  // guardar marcador jugador
  let nuevoTop10 = [...top10FromLocalStorage, {nombre: jugador1, marcador: marcador1}];
  localStorage.setItem("top10Rosco", JSON.stringify(nuevoTop10));
  // mostrar resultado del juego
  Swal.fire({
    title: 'Tu rosco ha terminado',
    text: `Has obtenido ${marcador1.correctas} puntos`,
    showClass: {
      popup: 'animate__animated animate__tada'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    willClose: () => {
      hide("juego");
      show("top10");
      show("menu");
    }
  })
  
  // ver si es top10
  //     si es, felicitar y agregar a top10 y ordenarlo.
  //     si no, desear mejor suerte la próxima vez
}

function isTop10(jugador){
  // evaluar si el puntaje final del jugador le permite ingresar al top10
}

function ordenaTop10(top10){
  // ordenar top10Mock y generar el top10 ordenado
  top10.sort((a, b) => b.marcador.correctas - a.marcador.correctas)
}

function check(){
  // valida la respuesta del jugador y suma sus puntos
  if (rosco1.setPalabras[letra].palabra.includes(inputRespuesta.value.toLowerCase())){
    Swal.fire({
      icon: 'success',
      title: 'Bravo!',
      showConfirmButton: false,
      timer: 1000,
      willClose: () => {
        marcador1.correctas++;
        rosco1.setVerde(letra);
        siguiente(true);
      }
    })
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      html: `La respuesta era <strong>${rosco1.setPalabras[letra].palabra}</strong>`,
      showConfirmButton: false,
      timer: 2000,
      willClose: () => {
        marcador1.incorrectas++;
        rosco1.setRojo(letra);
        siguiente(true);
      }
    })
    // marcador1.incorrectas++;
    // rosco1.setRojo(letra);
  }

  // siguiente(true);
}

function siguiente(checked){
  if (checked){
    // si estamos posicionados en la última letra
    if(rosco1.punteroLetra == rosco1.letrasRestantes.length - 1){
      rosco1.removerDeLetrasRestantes(rosco1.punteroLetra);
      rosco1.punteroLetra = 0;
      try{
        rosco1.lostFocus(letra);
        letra = rosco1.letrasRestantes.at(rosco1.punteroLetra);
        rosco1.setFocus(letra);
        // console.log("letra es: ", letra);
        parrafoPista.innerText = rosco1.setPalabras[letra].pista;
        parrafoDefinicion.innerText = rosco1.setPalabras[letra].definicion;
        inputRespuesta.value = "";
        // console.log("checked es: ", checked);
        // console.log("letras restantes (siguiente): ", rosco1.letrasRestantes);
      }catch (e){
        // console.log(e);
        finalizarJuego();
      }
    }
    else {
      rosco1.removerDeLetrasRestantes(rosco1.punteroLetra);
      rosco1.lostFocus(letra);
      letra = rosco1.letrasRestantes.at(rosco1.punteroLetra);
      rosco1.setFocus(letra);
      // console.log("letra es: ", letra)
      parrafoPista.innerText = rosco1.setPalabras[letra].pista
      parrafoDefinicion.innerText = rosco1.setPalabras[letra].definicion;
      inputRespuesta.value = "";
      // console.log("checked es: ", checked);
      // console.log("letras restantes (siguiente): ", rosco1.letrasRestantes);
    }
  }
  else{
    rosco1.lostFocus(letra);
    letra = rosco1.saltaPalabra();
    rosco1.setFocus(letra);
    // console.log("letra es: ", letra)
    parrafoPista.innerText = rosco1.setPalabras[letra].pista
    parrafoDefinicion.innerText = rosco1.setPalabras[letra].definicion;
    inputRespuesta.value = "";
    // console.log("checked es: ", checked);
    // console.log("letras restantes (siguiente): ", rosco1.letrasRestantes);
  }
}

async function getDict(){
  const request = new Request(
    "https://api.jsonbin.io/v3/b/64518d6bb89b1e229995b9d0", 
    {
      method: "GET", 
      headers: {
        "X-Master-Key": "$2b$10$ZyKyROpXJIjQJK8kHryPPu9LtG53TPB5A3DxYfZUzlHnsxo06F7vK", 
        "X-Bin-Meta": "false"
      }
    }
  );
  try {
    // const URLJSON = "../data/diccionario.json";
    const response = await fetch(request);
    const diccionario = await response.json();
    return diccionario;
  } catch(error) {
    console.log("No se pudieron obtener datos desde la API.", error);
  }
}

async function crearJuego(){
  let diccionarioDelJuego = await getDict();
  // console.log("Diccionario del juego: ", diccionarioDelJuego);
  diccionario1 = new Diccionario(diccionarioDelJuego);
  // console.log(typeof(diccionario1));
  set1 = diccionario1.getSet();
  // console.log(set1);
  let keys = Object.keys(set1);
  rosco1 = new Rosco(set1);
  rosco1.render();
  rosco1.isActive = true;
  parrafoPista.innerText = rosco1.setPalabras[letra].pista
  parrafoDefinicion.innerText = rosco1.setPalabras[letra].definicion;
}

function reiniciarJuego(){
  diccionario1 =[];
  set1 = [];
  keys = [];
  rosco1;
  jugador1 = "";
  marcador1 = {
    correctas: 0,
    incorrectas: 0
  };
  letra = "a";
  inputRespuesta.value = "";
}

// creacion de la partida - Variables globales
let top10Mock = [
  {
    nombre: "Sutano",
    marcador: {correctas: 10, incorrectas: 16}
  },
  {
    nombre: "Mengano",
    marcador: {correctas: 11, incorrectas: 15}
  },
  {
    nombre: "Pepe",
    marcador: {correctas: 13, incorrectas: 13}
  },
  {
    nombre: "Tito",
    marcador: {correctas: 9, incorrectas: 17}
  },
];
let diccionario1 =[];
let set1 = [];
let keys = [];
let rosco1;
let jugador1 = "";
let marcador1 = {
  correctas: 0,
  incorrectas: 0
};
let letra = "a";

let parrafoPista = document.getElementById("parrafo-pista");
let parrafoDefinicion = document.getElementById("parrafo-definicion");
let inputRespuesta = document.getElementById("input-respuesta");
let botonSiguiente = document.getElementById("boton-siguiente");
let saludoJugador = document.getElementById("saludo-jugador");
let juego = document.getElementById("menu-juego");

crearJuego();


function prueba(){
  // función para probar cosas
  console.log(rosco1.saltaPalabra());
}
