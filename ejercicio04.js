//Ejercicio 04
let grados = parseInt(
  prompt("Ingresa los grados Celsius que quieras convertir:")
);

function celsius(gradosCelsius) {
  function farenheit(gradosCelsius) {
    return gradosCelsius * 1.8 + 32;
  }

  function kelvin(gradosFarenheit) {
    return (gradosFarenheit - 32) * (5 / 9) + 273.15;
  }

  let gradosFarenheit = farenheit(gradosCelsius);
  let gradosKelvin = kelvin(gradosFarenheit);

  console.log("Grados Celsius: " + gradosCelsius);
  console.log("Grados Farenheit: " + gradosFarenheit);
  console.log("Grados Kelvin: " + gradosKelvin);
}

celsius(grados);
