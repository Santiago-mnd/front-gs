import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deadlineStartAddNew, deadlineStartLoading } from "../actions/deadline";
import { Navbar } from "../components/ui/Navbar";

const DeadlinesScreen = () => {
  const { deadlines } = useSelector((state) => state.deadlines);

  const dispatch = useDispatch();

  const initDeadline = {
    weeks: "",
  };

  const [formValues, setFormValues] = useState(initDeadline);

  const { weeks } = formValues;

  useEffect(() => {
    dispatch(deadlineStartLoading());
  }, [dispatch]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      [target.weeks]: target.value,
    });
  };

  const handleSubmitFor = (e) => {
    e.preventDefault();
    dispatch(deadlineStartAddNew(formValues));
  };

  return (
    <>
      <Navbar />
      <h2>Por terminar</h2>
      {/* <form className="container" onSubmit={handleSubmitFor}>
        <input
          type="number"
          placeholder="¿De cuántas semanas es el nuevo plazo?"
          name="name"
          value={weeks}
          onChange={handleInputChange}
        />
        <button type="submit">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form> */}
    </>
  );
};

export default DeadlinesScreen;
