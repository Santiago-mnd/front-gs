import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLogin, startRegister } from "../../actions/auth";
import Swal from "sweetalert2";

import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "santiago@example.com",
    lPassword: "1234567",
  });

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "Mnd",
    rEmail: "mnd@gmail.com",
    rPassword1: "123456",
    rPassword2: "123456",
  });

  const { lEmail, lPassword } = formLoginValues;
  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword1 !== rPassword2) {
      return Swal.fire(
        "Error",
        "Las contraseñas deben de ser iguales",
        "error"
      );
    }
    dispatch(startRegister(rEmail, rPassword1, rName));
  };

  return (
    <>
      <section className="section__login">
        <div className="section__login--login">
          <h3>Ingresar</h3>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              name="lEmail"
              value={lEmail}
              onChange={handleLoginInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="lPassword"
              value={lPassword}
              onChange={handleLoginInputChange}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
        <div className="section__login--signin">
          <h3>Registrate</h3>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nombre"
              name="rName"
              value={rName}
              onChange={handleRegisterInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="rEmail"
              value={rEmail}
              onChange={handleRegisterInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="rPassword1"
              value={rPassword1}
              onChange={handleRegisterInputChange}
            />
            <input
              type="password"
              placeholder="Repite tu password"
              name="rPassword2"
              value={rPassword2}
              onChange={handleRegisterInputChange}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </section>
    </>
  );
};
