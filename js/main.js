
// Clases
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
  }
  
  render(){
    let divRosco = document.getElementById("rosco");
    // let rosco = "";
    let rosco = `
      <button id="circulo-a" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 0px; right: 250px">A</button>
      <button id="circulo-b" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 7.26px; right: 190.17px">B</button>
      <button id="circulo-c" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 28.63px; right: 133.81px">C</button>
      <button id="circulo-d" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 62.87px; right: 84.21px">D</button>
      <button id="circulo-e" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 107.98px; right: 44.25px">E</button>
      <button id="circulo-f" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 161.34px; right: 16.24px">F</button>
      <button id="circulo-g" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 219.86px; right: 1.82px">G</button>
      <button id="circulo-h" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 219.86px; right: 1.82px">H</button>
      <button id="circulo-i" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 161.34px; right: 16.24px">I</button>
      <button id="circulo-j" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 107.98px; right: 44.25px">J</button>
      <button id="circulo-k" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 62.87px; right: 84.21px">K</button>
      <button id="circulo-l" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 28.63px; right: 133.81px">L</button>
      <button id="circulo-m" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 7.26px; right: 190.17px">M</button>
      <button id="circulo-n" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 0px; left: 250px">N</button>
      <button id="circulo-ñ" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 7.26px; left: 190.17px">Ñ</button>
      <button id="circulo-o" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 28.63px; left: 133.81px">O</button>
      <button id="circulo-p" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 62.87px; left: 84.21px">P</button>
      <button id="circulo-q" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 107.98px; left: 44.25px">Q</button>
      <button id="circulo-r" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 161.34px; left: 16.24px">R</button>
      <button id="circulo-s" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="bottom: 219.86px; left: 1.82px">S</button>
      <button id="circulo-t" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 219.86px; left: 1.82px">T</button>
      <button id="circulo-u" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 161.34px; left: 16.24px">U</button>
      <button id="circulo-v" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 107.98px; left: 44.25px">V</button>
      <button id="circulo-x" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 62.87px; left: 84.21px">X</button>
      <button id="circulo-y" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 28.63px; left: 133.81px">Y</button>
      <button id="circulo-z" disabled class="absolute transform text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center" style="top: 7.26px; left: 190.17px">Z</button>
    `;
    // agrega círculos al rosco por cada letra del set de palabras.
    // for(const letra in this.setPalabras){
    //   rosco += `<button id="circulo-${letra}" type="button" disabled class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 ">${letra.toUpperCase()}</button>`;
    // }
    // console.log(this.setPalabras)
    // console.log(rosco);
    divRosco.innerHTML = rosco;
    // console.log(divRosco)
  }

  setStatusRespuestas(Correctas, Incorrectas, sinContestar){
  
  };

  getStatusRespuestas(){
    let status = {
      correctas: 0,
      incorrectas: 0
    };
  }

  setVerde(letra){
    // document.getElementById(`circulo-${letra}`).className = "text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 ";
    document.getElementById(`circulo-${letra}`).classList.add("from-green-500", "via-green-600", "to-green-700", "focus:ring-green-300");
    document.getElementById(`circulo-${letra}`).classList.remove("from-blue-500", "via-blue-600", "to-blue-700", "focus:ring-blue-300");
  };

  setRojo(letra){
    // document.getElementById(`circulo-${letra}`).className = "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 ";
    document.getElementById(`circulo-${letra}`).classList.add("from-red-500", "via-red-600", "to-red-700", "focus:ring-red-300");
    document.getElementById(`circulo-${letra}`).classList.remove("from-blue-500", "via-blue-600", "to-blue-700", "focus:ring-blue-300");
  };

};

// creacion de la partida
const diccionario1 = new Diccionario(palabrasData);
let set1 = diccionario1.getSet();

const rosco1 = new Rosco(set1);
rosco1.render();

let marcador1 = {
  correctas: 0,
  incorrectas: 0
};


// comienzo del juego
for(const letra in set1){
  let respuesta = prompt(`❔\n\n${set1[letra].pista}\n\n${set1[letra].definicion}`);
  if(set1[letra].palabra.includes(respuesta.toLowerCase())){
    alert("🥳 CORRECTO!");
    marcador1.correctas++;
    rosco1.setVerde(letra);
  }
  else{
    alert(`❌ INCORRECTO!\n\nLa respuesta correcta es:       ${set1[letra].palabra.join(" / ")}`);
    marcador1.incorrectas++; 
    rosco1.setRojo(letra);
  }
};

alert(`Resultado del juego:\nCORRECTAS: ${marcador1.correctas}\nINCORRECTAS: ${marcador1.incorrectas}`);
