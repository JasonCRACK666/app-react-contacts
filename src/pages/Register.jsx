import LayoutAuth from "../components/layouts/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import { register } from "../services/authServices";

const Register = () => {
  const [validate, setValidate] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setValidate({ ...validate, [target.name]: target.value });
  };

  // // TODO: Hacer la llamada al servicio de auth/register
  // // TODO: Que los errores que se hagan se vean en el formulario
  // // TODO: Redirigirse al login
  const handleRegister = async (e) => {
    e.preventDefault();
    nameRef.current.innerHTML = "";
    emailRef.current.innerHTML = "";
    passwordRef.current.innerHTML = "";
    const result = await register(validate);
    if (result.errors) {
      if (result.errors.name) {
        nameRef.current.innerHTML = result.errors.name[0];
      }

      if (result.errors.email) {
        emailRef.current.innerHTML = result.errors.email[0];
      }

      if (result.errors.password) {
        passwordRef.current.innerHTML = result.errors.password[0];
      }
    } else {
      navigate("/");
    }
  };

  return (
    <LayoutAuth>
      <header>
        <h2 className="text-center text-green-500 text-4xl font-bold">
          REGISTER
        </h2>
      </header>

      <form className="p-6 w-96" onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="text-white" htmlFor="name">
            Name:
          </label>
          <input
            className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
              validate.name ? "opacity-100" : "opacity-10"
            } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
            type="text"
            name="name"
            onChange={handleChange}
            value={validate.name}
            id="name"
            placeholder="Enter your name"
          />
          <p ref={nameRef} className="text-md text-red-500"></p>
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="email">
            Email:
          </label>
          <input
            className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
              validate.email ? "opacity-100" : "opacity-10"
            } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
            type="email"
            name="email"
            onChange={handleChange}
            value={validate.email}
            id="email"
            placeholder="Enter your email"
          />
          <p ref={emailRef} className="text-md text-red-500"></p>
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="password">
            Password:
          </label>
          <input
            className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
              validate.password ? "opacity-100" : "opacity-10"
            } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
            type="password"
            name="password"
            onChange={handleChange}
            value={validate.password}
            id="password"
            placeholder="Enter your password"
          />
          <p ref={passwordRef} className="text-md text-red-500"></p>
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="password_confirmation">
            Confirm password:
          </label>
          <input
            className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
              validate.password_confirmation ? "opacity-100" : "opacity-10"
            } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
            type="password"
            name="password_confirmation"
            onChange={handleChange}
            value={validate.password_confirmation}
            id="password_confirmation"
            placeholder="Enter your password"
          />
        </div>

        <button
          className="px-2 py-1 transition-all text-white rounded-md block w-full text-lg bg-green-500 hover:bg-green-600"
          type="submit"
        >
          Register
        </button>
      </form>

      <p className="text-white">
        Are you registered? Login{" "}
        <Link
          className="font-bold text-green-500 hover:text-green-600 transition-all"
          to="/"
        >
          NOW
        </Link>
      </p>
    </LayoutAuth>
  );
};

export default Register;
