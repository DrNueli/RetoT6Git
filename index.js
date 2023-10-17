// Tema 5. Funciones

// RETO 2:  • En el fichero index.js (fichero de librería):
// - Declarar las funciones de la calculadora por separado (suma, resta, producto, división)
// - Al final del documento index.js escribir la sentencia:  module.exports =
// A continuación escribir el nombre de las funciones entre {} separados por comas de la librería que se desean exportar.

let subs = (op1, op2) => { let resultado = op1 - op2; return resultado};
let mult = (op1, op2) => { let resultado = op1 * op2; return resultado};
let div = (op1, op2) => { let resultado = op1 / op2; return resultado};

// console.log(mult(2,5));

module.exports = {cuadrado, subs, mult, div};