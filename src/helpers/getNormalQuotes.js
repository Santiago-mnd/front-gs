// a. Abono Normal ---- ((Precio del producto * tasa normal) + Precio del producto)
// / plazo

const normalRate = 0.0863833;

const getNormalQuotes = (productPrice, deadline) => {
  const finalNormalRate = productPrice * normalRate + productPrice / deadline;
  return finalNormalRate;
};

export default getNormalQuotes;
