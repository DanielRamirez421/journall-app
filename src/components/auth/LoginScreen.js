import React from "react";
import { Link } from "react-router-dom";
import { routerConstants } from "../../routers/routerConstants";

export const LoginScreen = () => {
  return (
    <div>
      <h3 className="auth__title">Login</h3>

      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          name="loginButton"
        >
          Login
        </button>

        <hr />

        <div className="auth__social-networks">
          <p>Login with social network</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link
          to={`${routerConstants.auth}${routerConstants.register}`}
          className="link"
        >
          Create new account
        </Link>
      </form>
    </div>
  );
};
