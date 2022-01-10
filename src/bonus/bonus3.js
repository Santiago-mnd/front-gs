//  ¿cómo harías una función en donde multipliques dos números dados sin USAR "*"
// como operador?, es decir, sin USAR por ejemplo let resultado = numero1 * numero2

// Lo primero que se me ocurre es utilizar un ciclo. Ya sea un for o un while, que se repita hasta cumplir la multiplicación:

const multiSinOperador = (numero1, numero2) => {
  let resultado = 0;

  for (let i = 0; i < numero1; i++) {
    resultado += numero2;
  }

  return resultado;
};

console.log("Multiplicación con ciclo For: ", multiSinOperador(2, 100));

// ------------------------------------------------------------------------------------------------------------------------

// Mediante un string con método repeat

const multString = (numero1, numero2) => {
  return " ".repeat(numero1).repeat(numero2).length;
};

console.log(
  "Multiplicación mediante la longitud de un string: ",
  multString(2, 100)
);

// ------------------------------------------------------------------------------------------------------------------------

// Utilizando recursividad

const multRecursividad = (numero1, numero2) => {
  if (numero2 === 0) return 0;
  if (numero2 === 1) return numero1;
  return numero1 + multRecursividad(numero1, numero2 - 1);
};

console.log("Multiplicación por recursividad", multRecursividad(2, 2));
