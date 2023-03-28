let diccionario = {
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

let estatus = {
  correctas: 0,
  incorrectas: 0
};

for (const letra in diccionario){
  respuesta = prompt(`ADIVINA: ${diccionario[letra][0].pista}\n\n${diccionario[letra][0].definicion}`);
  if(respuesta.toLowerCase() == diccionario[letra][0].palabra){
    alert("CORRECTO!");
    estatus.correctas++;
  }
  else{
    alert("INCORRECTO!");
    estatus.incorrectas++;
  }
};

alert(`Resultado del juego:\nCORRECTAS: ${estatus.correctas}\nINCORRECTAS: ${estatus.incorrectas}`);