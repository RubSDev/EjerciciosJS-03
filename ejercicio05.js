//Ejercicio 05
let word = prompt("Ingresa una palabra, por favor:");

function numVocales(word) {
  let sumaA = 0;
  let sumaE = 0;
  let sumaI = 0;
  let sumaO = 0;
  let sumaU = 0;

  for (let i = 0; i < word.length; i++) {
    let letra = word[i];

    if (letra === "a" || letra === "A") {
      sumaA++;
    }
    if (letra === "e" || letra === "E") {
      sumaE++;
    }
    if (letra === "i" || letra === "I") {
      sumaI++;
    }
    if (letra === "o" || letra === "O") {
      sumaO++;
    }
    if (letra === "u" || letra === "U") {
      sumaU++;
    }
  }
  console.log("La suma de a: " + sumaA);
  console.log("La suma de e: " + sumaE);
  console.log("La suma de i: " + sumaI);
  console.log("La suma de o: " + sumaO);
  console.log("La suma de u: " + sumaU);
}
numVocales(word);
