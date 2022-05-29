import { useNavigate, Link } from "react-router-dom";
import { logout } from "../services/authServices";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    await logout(token);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="flex justify-evenly h-16 items-center">
      <span className="text-2xl font-bold text-green-500">CONTACT LIST</span>
      <ul className="flex justify-center items-center gap-3">
        <li>
          <Link
            className="px-3 py-2 font-semibold transition-all rounded bg-green-500 hover:bg-green-600 text-white"
            to="/contacts"
          >
            MY CONTACTS
          </Link>
        </li>
        <li>
          <Link
            className="px-3 py-2 font-semibold transition-all rounded bg-green-500 hover:bg-green-600 text-white"
            to="/contact/create"
          >
            CREATE CONTACT
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleLogout()}
            className="px-3 py-2 font-semibold transition-all rounded bg-red-500 hover:bg-red-600 text-white"
          >
            LOGOUT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
