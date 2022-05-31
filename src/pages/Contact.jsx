import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getContact, deletedContact } from "../services/contactsServices";
import { useDispatch, useSelector } from "react-redux";
import { setContact } from "../redux/slices/contactsSlice";
import LayoutMain from "../components/layouts/LayoutMain";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.contact);
  const navigate = useNavigate();

  const loadContact = async (id, token) => {
    const res = await getContact(id, token);
    setIsLoading(false);
    dispatch(setContact(res.data));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    loadContact(id, token);
  }, [id]);

  const handleDeleteContact = async (id) => {
    const token = localStorage.getItem("token");
    const res = await deletedContact(id, token);
    if (res.messsage === "Unauthenticated.") {
      alert("No puedes eliminarlo");
    } else {
      navigate("/contacts");
    }
  };

  if (isLoading) {
    return (
      <LayoutMain>
        <p className="text-center text-5xl text-white font-bold">Loading...</p>
      </LayoutMain>
    );
  }

  return (
    <LayoutMain>
      <div className="text-center">
        <h1 className="text-6xl text-green-500 font-bold">
          {contact.nickname}
        </h1>
        <h2 className="text-white text-xl opacity-30">
          {contact.name + " " + contact.last_name}
        </h2>
        <p className="text-6xl font-bold text-white">
          {"#" + contact.phone_number}
        </p>
        <div className="mt-4">
          <Link
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors text-white text-lg"
            to={`/contact/${contact.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 transition-colors text-white text-lg ml-3"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Contact;
