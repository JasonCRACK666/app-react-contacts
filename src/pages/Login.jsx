import LayoutAuth from "../components/layouts/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { login } from "../services/authServices";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  // TODO: Obtener el token, luego de llamar al servicio auth/login, y guardarlo en el LocalStorage
  // TODO: Redirigirme a la pagina principal de los contactos
  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(user);
    if (result.errors) {
      if (result.errors.email) {
        emailRef.current.innerHTML = result.errors.email[0];
      }

      if (result.errors.password) {
        passwordRef.current.innerHTML = result.errors.password[0];
      }
    } else {
      localStorage.setItem("token", result.access_token);
      navigate("/contacts");
    }
  };

  return (
    <LayoutAuth>
      <header>
        <h2 className="text-center text-green-500 text-4xl font-bold">LOGIN</h2>
      </header>
      <form className="p-6 w-96" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="text-white" htmlFor="email">
            Email:
          </label>
          <input
            className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
              user.email ? "opacity-100" : "opacity-10"
            } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
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
              user.password ? "opacity-100" : "opacity-10"
            } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            id="password"
            placeholder="Enter your password"
          />
          <p ref={emailRef} className="text-md text-red-500"></p>
        </div>
        <button
          className="px-2 py-1 transition-all text-white rounded-md block w-full text-lg bg-green-500 hover:bg-green-600"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="text-white">
        You are not registered? Register{" "}
        <Link
          className="font-bold text-green-500 hover:text-green-600 transition-all"
          to="/register"
        >
          NOW
        </Link>
      </p>
    </LayoutAuth>
  );
};

export default Login;
