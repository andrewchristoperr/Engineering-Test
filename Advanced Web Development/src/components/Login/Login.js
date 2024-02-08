import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const payload = {
    user,
    password,
  };

  const onSubmitHandler = () => {
    axios.post("http://localhost/3000/login", payload).then((response) => {
      const response1 = response;
      localStorage.setItem("stringify", JSON.stringify(response1));
      localStorage.setItem("Mytoken", response1.data.token);
    });

  };

 
  return (
    <>
      <div className="login-container">
        <div className="card my_login_card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary my_login_btn"
                onClick={onSubmitHandler}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
