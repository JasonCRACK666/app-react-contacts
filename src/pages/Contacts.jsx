import LayoutMain from "../components/layouts/LayoutMain";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletedContact, getContacts } from "../services/contactsServices";
import { deleteContact, setContacts } from "../redux/slices/contactsSlice";
import ContactItem from "../components/ContactItem";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const setContactsRedux = async (token) => {
    const res = await getContacts(token);
    setIsLoading(false);
    dispatch(setContacts(res.data));
  };

  const handleDeleteContact = async (id) => {
    const token = localStorage.getItem("token");
    const res = await deletedContact(id, token);
    if (res.status === 0) {
      navigate("/contacts");
    } else {
      dispatch(deleteContact(id));
    }
  };

  useEffect(() => {
    setContactsRedux(token);
  }, [token]);

  if (isLoading) {
    return (
      <LayoutMain>
        <p className="text-center text-5xl text-white font-bold">Loading...</p>
      </LayoutMain>
    );
  }

  return (
    <LayoutMain>
      <div className="grid grid-cols-4 gap-4">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            {...contact}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </div>
    </LayoutMain>
  );
};

export default Contacts;
