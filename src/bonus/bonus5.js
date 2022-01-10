// ¿qué métodos de un array en JavaScript conoces?
// Y da un ejemplo de cada uno.

// Métodos que más utilizo:

// ------------------------------------------------------------------------------------------------------------------------
const frutas = ["🍎", "🍎", "🍐", "🍐", "🍏", "🍏"];
const frutasMutable = ["🍎", "🍎", "🍐", "🍐", "🍏", "🍏"];

// map - inmutable -> no afecta al arreglo original

// Lo utilizo más en react para recorrer arreglos o, arreglos de objetos y pintarlos en la pantalla, aunque tiene demasiados usos.
// const imprimirFrutas = arregloGlobal.map((fruta) => <p> {fruta} </p>); // Comenté este ejemplo ya que me daría errores.

// ------------------------------------------------------------------------------------------------------------------------

// find / findIndex - inmutable
// Con el método find podemos encontrar y traer la primera coincidencia, esto quiere decir, que si hay más coincidencias no las traerá.
// findIndex trabaja de la misma manera, pero sólo mostrará el índice en el que se encuentra la coincidencia.

const encontrarManzana = frutas.find((fruta) => fruta === "🍎");
const encontrarIndiceManzana = frutas.findIndex((fruta) => fruta === "🍎");
console.log("find: ", encontrarManzana);
console.log("findIndex: ", encontrarIndiceManzana);

// ------------------------------------------------------------------------------------------------------------------------

// filter - inmutable
// A diferencia de find, filter creará un nuevo arreglo con todas las coincidencias.

const encontrarManzanaVerde = frutas.filter((fruta) => fruta === "🍏");
console.log("filter: ", encontrarManzanaVerde);

// ------------------------------------------------------------------------------------------------------------------------

// length - inmutable
// Con length podemos saber la longitud de un arreglo o un string.

const cuantosObjetosHay = frutas.length;
console.log("length: ", cuantosObjetosHay);

// ------------------------------------------------------------------------------------------------------------------------

// Some - inmutbale
// Nos devuelve un booleano, en true si se cumplió la condición puesta o false de lo contrario.

const hayPeras = frutas.some((fruta) => fruta === "🍐");
console.log("some: ", hayPeras);

// ------------------------------------------------------------------------------------------------------------------------

// every - inmutable
// Nos devuelve un booleano, pero, al contrario de some, en éste caso para devolver true, todos y cada uno de los elementos recorridos deben de cumplir la condición, de lo contrario, será false.

const sonManzanasRojas = frutas.every((fruta) => fruta === "🍎");
console.log("every: ", sonManzanasRojas);

// ------------------------------------------------------------------------------------------------------------------------

// reverse - MUTABLE - modifica el arreglo original
// Da la vuelvta al orden del arreglo o incluso.

const reversa = frutasMutable.reverse();
console.log("reversa: ", reversa);

// ------------------------------------------------------------------------------------------------------------------------

// Slice - inmutable
// Este método obtiene los primeros elementos que se le indiquen por argumento, el argumento deberá ser el índice máximo. Devolverá un nuevo arreglo con el resultado.
const slice = frutas.slice(2);
console.log("slice: ", slice);

// ------------------------------------------------------------------------------------------------------------------------

// Métodos completamente mutables

// splice - MUTABLE
// Corta el elemento que indiquemos, recibe varios argumenots, tales, como desde qué indice comenzar, cuántos elementos cortar desde ése índice y otros más. Este nos devuelve sólo los elementos que ha cortado.

const splice = frutasMutable.splice(4, 1);
console.log("splice: ", splice);
console.log("Frutas después de splice: ", frutasMutable);

// ------------------------------------------------------------------------------------------------------------------------

// Push
// Sirve para colocar elementos al final del arreglo.

const agregar = frutasMutable.push("🍎");
console.log("Frutas después push: ", frutasMutable);

// ------------------------------------------------------------------------------------------------------------------------

// pop
// Sirve para extraer el último elemento
const extraerUltimo = frutasMutable.pop();
console.log("pop: ", extraerUltimo);
console.log("Frutas después de pop: ", frutasMutable);

// ------------------------------------------------------------------------------------------------------------------------
// shift
// Extrae elementos del inicio del arreglo.
const extraerPrimero = frutasMutable.shift();
console.log("shift: ", extraerPrimero);
console.log("Frutas después de shift: ", frutasMutable);

// ------------------------------------------------------------------------------------------------------------------------

// unshift
// Agrega un elemento al inicio.
const agregarInicio = frutasMutable.unshift("🍕");
console.log("Frutas después de unshift: ", frutasMutable);

// Comparación final de arreglos

console.log("Aplicando métodos inmutables: ", frutas);
console.log("Aplicando métodos mutables: ", frutasMutable);
