//Ejercicio 02
let edadIdeal = parseInt(prompt("¿Hasta qué edad te gustaría vivir?"));
let edadActual = parseInt(prompt("¿Qué edad tienes actualmente"));
let bocadillo = parseInt(prompt("¿Cuántos bocadillos comes al día"));

function edadMax(edadIdeal, edadActual, bocadillo) {
  console.log(
    "Podrás comer " +
      (edadIdeal - edadActual) * (365 * bocadillo) +
      " bocadillos hasta tus " +
      edadIdeal +
      " años que te gustaría vivir"
  );
}

edadMax(edadIdeal, edadActual, bocadillo);
