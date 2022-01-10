// b. Abono Puntual ---- ((Precio del producto * tasa puntual) + Precio del
// producto) / plazo

const punctualRate = 0.0746916;

const getPunctualQuote = (productPrice, deadline) => {
  const finalPunctualQuote =
    productPrice * punctualRate + productPrice / deadline;
  return finalPunctualQuote;
};

export default getPunctualQuote;
