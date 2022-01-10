// ¿Que son los parámetros nombrados en JavaScript y para qué sirven?, da un
// ejemplo de cómo los usarías.

// Los parámetros nombrados, como su nobre lo dice, sirve para darle un nombre específico a los parámetros y, por medio de este trabajar sin importar el orden.

// En las funciones generalmente trabajamos con un orden impuesto o, autoimpuesto, es decir, si creamos una función en la cual queramos retornar un nombre varias veces, haríamos algo así:

// const repetir = ( nombre: string, contador: number ) => return nombre.repeat(number)
// Y la llamaríamos de esta forma: repetir( 'Santiago', 2 ), aquí ya se habría impuesto un orden, por lo que, si mandamos como primer argumento el número y como segundo el string, nos dará un error.

// Para poder "romper" este orden, utilizamos los parámetros nombrados.

const repetir = ({ nombre = "Santiago ", contador = 2 }) => {
  return nombre.repeat(contador);
};

console.log(
  'Llamándo la función con argumentos "desordenados": ',
  repetir({ contador: 2, nombre: "Santiago " })
);

// De esta forma, pude mandar el contador como primer argumento y el nombre como segundo sin algún problema. Inlcuso podríamos mandar parámetros con un valor por defecto en caso de que uno no se mande.

console.log(
  'Llamándo la función con un argumento faltante": ',
  repetir({ contador: 2 })
);

console.log("Llamándo la función sin argumentos: ", repetir({}));
