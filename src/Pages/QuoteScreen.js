import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deadlineStartLoading } from "../actions/deadline";
import { Navbar } from "../components/ui/Navbar";
import getNormalQuotes from "../helpers/getNormalQuotes";
import getPunctualQuote from "../helpers/getPunctualQuotes";

const QuoteScreen = () => {
  const dispatch = useDispatch();
  const { deadlines } = useSelector((state) => state.deadlines);
  useEffect(() => {
    dispatch(deadlineStartLoading());
  }, [dispatch]);

  const [price, setPrice] = useState(0);

  const [deadline, setDeadline] = useState(36);

  const [showQuotes, setShowQuotes] = useState(false);

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDl = (e) => {
    setDeadline(e.target.value);
  };

  const getQuote = (e) => {
    e.preventDefault();
    setShowQuotes(!showQuotes);
  };

  return (
    <>
      <Navbar />

      <section className="section__products">
        <h2>Quote</h2>
        {deadlines.map((deadline) => {
          return (
            <div key={deadline._id} className="section__products--container">
              <p>Semanalidades: {deadline.weeks}</p>
              <p>Tasa normal: {deadline.normalRate} </p>
              <p>Tasa puntual: {deadline.punctualRate} </p>
            </div>
          );
        })}
      </section>

      <form onSubmit={getQuote}>
        <input
          type="number"
          name="price"
          placeholder="¿Cuál es el precio del producto?"
          onChange={handlePrice}
        />
        <label htmlFor="semanalidad">Selecciona el plazo</label>
        <select name="semanalidad" onChange={handleDl}>
          {deadlines.map((deadline) => (
            <option key={deadline._id} value={deadline.weeks}>
              {deadline.weeks}
            </option>
          ))}
        </select>
        <button type="submit" className="quote-submit">
          Mostar/Esconder cotización
        </button>
      </form>

      {showQuotes && (
        <div className="cotizacion">
          <p>Abono semanal, tasa normal: {getNormalQuotes(price, deadline)}</p>
          <p>
            Abono semanal, tasa puntual: {getPunctualQuote(price, deadline)}{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default QuoteScreen;
