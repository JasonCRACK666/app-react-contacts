import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const LayoutMain = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // TODO: ver la manera de poder saber si el token es valido o no
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4 flex flex-col justify-center">{children}</div>
    </div>
  );
};

export default LayoutMain;
