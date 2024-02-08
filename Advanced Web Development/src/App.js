import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { Home } from "./components/Home";
import React, { useState } from "react";
function App() {
  // const barearToken = localStorage.getItem("Mytoken");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route
          render={() => {
            return Login ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}
export default App;
