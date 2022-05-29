import LayoutMain from "../components/layouts/LayoutMain";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../services/contactsServices";
import { setContacts } from "../redux/slices/contactsSlice";
import ContactItem from "../components/ContactItem";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  // add contacts in redux state
  const setContactsRedux = async (token) => {
    const res = await getContacts(token);
    setIsLoading(false);
    dispatch(setContacts(res.data));
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
      {/* // // TODO: hacer un mapeo de los contactos */}
      <div className="grid grid-cols-4 gap-4">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </div>
    </LayoutMain>
  );
};

export default Contacts;
