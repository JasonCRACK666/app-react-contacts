import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getContact } from "../services/contactsServices";
import { useDispatch, useSelector } from "react-redux";
import { setContact } from "../redux/slices/contactsSlice";
import LayoutMain from "../components/layouts/LayoutMain";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const loadContact = async (id, token) => {
    const res = await getContact(id, token);
    setIsLoading(false);
    dispatch(setContact(res.data));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    loadContact(id, token);
  }, [id]);

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
          {contacts[0].nickname}
        </h1>
        <h2 className="text-white text-xl opacity-30">
          {contacts[0].name + " " + contacts[0].last_name}
        </h2>
        <p className="text-6xl font-bold text-white">
          {"#" + contacts[0].phone_number}
        </p>
        <div className="mt-4">
          <Link
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors text-white text-lg"
            to={`/contact/${contacts[0].id}/edit`}
          >
            Edit
          </Link>
          <button className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 transition-colors text-white text-lg ml-3">
            Delete
          </button>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Contact;
