
class Diccionario{
  constructor(palabrasArray){
    this.palabrasArray = palabrasArray;
  }

  getSet(){
    // console.log(this.palabrasArray);
    return this.palabrasArray;
  }
}

let palabrasData = {
  a: [
    {
      pista: "Comienza con A",
      palabra: "abrevadero",
      definicion: "Estanque, pilón o paraje del río, arroyo o manantial a propósito para dar de beber al ganado."
    },
    {
      pista: "",
      palabra: "",
      definicion: ""
    },
  ],
  b: [
    {
      pista: "Comienza con B",
      palabra: "banalidad",
      definicion: "Cualidad de banal."
    }
  ],
  c: [
    {
      pista: "Comienza con C",
      palabra: "carcajada",
      definicion: "Risa impetuosa y ruidosa."
    }
  ],
  d: [
    {
      pista: "Comienza con D",
      palabra: "duna",
      definicion: "Colina de arena movediza que en los desiertos y en las playas forma y empuja el viento."
    }
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

// let status = {
//   correctas: 0,
//   incorrectas: 0
// };

// for (const letra in diccionario){
//   respuesta = prompt(`ADIVINA: ${diccionario[letra][0].pista}\n\n${diccionario[letra][0].definicion}`);
//   if(respuesta.toLowerCase() == diccionario[letra][0].palabra){
//     alert("CORRECTO!");
//     status.correctas++;
//   }
//   else{
//     alert("INCORRECTO!");
//     status.incorrectas++;
//   }
// };

// alert(`Resultado del juego:\nCORRECTAS: ${status.correctas}\nINCORRECTAS: ${status.incorrectas}`);



class Rosco{
  constructor(setPalabras){
    this.setPalabras = setPalabras;
  }

  render(){
    let divRosco = document.getElementById("rosco");
    console.log(divRosco);

  }
};

const diccionario1 = new Diccionario(palabrasData);
let set1 = diccionario1.getSet();

const rosco1 = new Rosco(set1);
rosco1.render();