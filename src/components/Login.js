/**
 * @file Login.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the login form.
 *
 * @returns {Login}
 */
//React
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

// api
import { signin } from "../datasource/api-user";
import { authenticate } from "./auth/auth-helper";

// redux
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const Login = () => {
  const state = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signin(formData)
      .then((response) => {
        if (response && response.success) {
          authenticate(response.token, () => {
            dispatch(login());
            navigate(from || "/", { replace: true });
          });
        } else {
          setErrorMsg(response.message);
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <fieldset className="custom-fieldset">
          <legend className="custom-legend">Login Form</legend>
          <div className="block">
            <FontAwesomeIcon icon={faEnvelope} />
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="block">
            <FontAwesomeIcon icon={faLock} />
            <label htmlFor="password"></label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {errorMsg && <div className="text-danger">{errorMsg}</div>}
          <button
            type="button"
            className="btn btn-link "
            style={{
              color: "var(--text-primary)",
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </fieldset>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
};

export default Login;
