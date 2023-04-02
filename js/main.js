
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
    let rosco = "";
    // agrega círculos al rosco por cada letra del set de palabras.
    for(const letra in this.setPalabras){
      rosco += `<button id="circulo-${letra}" type="button" disabled class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 ">${letra.toUpperCase()}</button>`;
    }
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
    document.getElementById(`circulo-${letra}`).className = "text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 ";
  };

  setRojo(letra){
    document.getElementById(`circulo-${letra}`).className = "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:ring-blue-800 shadow-lg shadow-neutral-500/50 dark:shadow-lg dark:shadow-neutral-800/80 font-semibold rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 ";
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
  let respuesta = prompt(`ADIVINA: ${set1[letra].pista}\n\n${set1[letra].definicion}`);
  if(set1[letra].palabra.includes(respuesta.toLowerCase())){
    alert("🥳 CORRECTO!");
    marcador1.correctas++;
    rosco1.setVerde(letra);
  }
  else{
    alert(`❌ INCORRECTO!\nLa respuesta correcta es:       ${set1[letra].palabra}`);
    marcador1.incorrectas++; 
    rosco1.setRojo(letra);
  }
};

alert(`Resultado del juego:\nCORRECTAS: ${marcador1.correctas}\nINCORRECTAS: ${marcador1.incorrectas}`);