import React from 'react'
import { Link } from 'react-router-dom'
import { routerConstants } from '../../routers/routerConstants'

export const RegisterScreen = () => {
  return (
    <div>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
        />
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
        <input
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="password"
        />
        <button
          className="btn btn-primary btn-block mb-2"
          type="submit"
          name="loginButton"
        >
          Login
        </button>

        <Link
          to={`${routerConstants.auth}${routerConstants.login}`}
          className="link"
        >
          Already registered?
        </Link>
      </form>
    </div>
  )
}
