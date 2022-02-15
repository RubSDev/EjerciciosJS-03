//Ejercicio 03
let radio = parseInt(prompt("¿Cuánto mide el radio de tu círculo?"));

function circunferencia(radio) {
  console.log("La circunferencia de tu círculo es: " + 3.14 * (radio * 2));

  function area(radio) {
    console.log("El área de tu cículo es: " + 3.14 * radio ** 2);
  }

  return area(radio);
}

circunferencia(radio);
