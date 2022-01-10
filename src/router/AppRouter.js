import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { LoginScreen } from "../components/auth/LoginScreen";
import ProductsScreen from "../Pages/ProductsScreen";
import { startChecking } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import DeadlinesScreen from "../Pages/DeadlinesScreen";
import QuoteScreen from "../Pages/QuoteScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <div className="lds-dual-ring"></div>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/productos"
            component={ProductsScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/plazos"
            component={DeadlinesScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/cotizaciones"
            component={QuoteScreen}
            isAuthenticated={!!uid}
          />

          <Redirect to="/productos" />
        </Switch>
      </div>
    </Router>
  );
};
