// Data
let palabrasData = {
  a: [
    {
      pista: "Comienza con A",
      palabra: ["abrevadero"],
      definicion: "Estanque, pilón o paraje del río, arroyo o manantial a propósito para dar de beber al ganado."
    },
    {
      pista: "Comienza con A",
      palabra: ["astucia"],
      definicion: "Cualidad de astuto."
    },
    {
      pista: "Comienza con A",
      palabra: ["alambre"],
      definicion: "Hilo de cualquier metal, obtenido por trefilado."
    },
    {
      pista: "Comienza con A",
      palabra: ["anabólico"],
      definicion: "Perteneciente o relativo al anabolismo."
    },
  ],
  b: [
    {
      pista: "Comienza con B",
      palabra: ["banalidad"],
      definicion: "Cualidad de banal."
    },
    {
      pista: "Comienza con B",
      palabra: ["binario"],
      definicion: "Compuesto de dos elementos, unidades o guarismos."
    },
    {
      pista: "Comienza con B",
      palabra: ["boicot"],
      definicion: "Acción que se dirige contra una persona o entidad para obstaculizar el desarrollo o funcionamiento de una determinada actividad social o comercial."
    },
    {
      pista: "Comienza con B",
      palabra: ["butaca"],
      definicion: "Asiento con brazos y respaldo, semejante a un sillón pero generalmente menos voluminoso."
    },
  ],
  c: [
    {
      pista: "Comienza con C",
      palabra: ["carcajada"],
      definicion: "Risa impetuosa y ruidosa."
    },
    {
      pista: "Comienza con C",
      palabra: ["criollo"],
      definicion: "Autóctono o propio de un país hispanoamericano, o del conjunto de ellos."
    },
    {
      pista: "Comienza con C",
      palabra: ["carbonilla"],
      definicion: "Carbón mineral menudo que, como residuo, suele quedar al mover y trasladar el grueso."
    },
    {
      pista: "Comienza con C",
      palabra: ["cuaco"],
      definicion: "Harina de la raíz de la yuca."
    },
    
  ],
  d: [
    {
      pista: "Comienza con D",
      palabra: ["duna"],
      definicion: "Colina de arena movediza que en los desiertos y en las playas forma y empuja el viento."
    },
    {
      pista: "Comienza con D",
      palabra: ["dromedario"],
      definicion: "Artiodáctilo rumiante, propio de Arabia y del norte de África, muy semejante al camello, del cual se distingue principalmente por no tener más que una giba adiposa en el dorso."
    },
    {
      pista: "Comienza con D",
      palabra: ["dinosaurio"],
      definicion: "Reptil fósil, propio del Mesozoico, generalmente de gran tamaño, cabeza pequeña, cuello largo, cola robusta y larga, y extremidades posteriores más largas que las anteriores."
    },
    {
      pista: "Comienza con D",
      palabra: ["docenario", "docenaria"],
      definicion: "Que consta de doce unidades o elementos constitutivos."
    },
    
  ],
  // e: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // f: [
  //   {
  //     pista: "Comienza con ",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // g: [
  //   {
  //     pista: "Comienza con ",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // h: [
  //   {
  //     pista: "Comienza con ",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // i: [
  //   {
  //     pista: "Comienza con ",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // j: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // k: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // l: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // m: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // n: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // ñ: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // o: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // p: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // q: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // r: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // s: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // t: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // u: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // v: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // x: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // y: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
  // z: [
  //   {
  //     pista: "",
  //     palabra: "",
  //     definicion: ""
  //   }
  // ],
};

// Clases
class Diccionario{
  constructor(palabrasArray){
    this.palabrasArray = palabrasArray;
  }

  getSet(){
    let set = [];
    console.log(this.palabrasArray["a"].length);
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

let estado1 = {
  correctas: 0,
  incorrectas: 0
};


// comienzo del juego
for(const letra in set1){
  let respuesta = prompt(`ADIVINA: ${set1[letra].pista}\n\n${set1[letra].definicion}`);
  if(set1[letra].palabra.includes(respuesta.toLowerCase())){
    alert("CORRECTO!");
    estado1.correctas++;
    rosco1.setVerde(letra);
  }
  else{
    alert("INCORRECTO!");
    estado1.incorrectas++;
    rosco1.setRojo(letra);
  }
};

alert(`Resultado del juego:\nCORRECTAS: ${estado1.correctas}\nINCORRECTAS: ${estado1.incorrectas}`);