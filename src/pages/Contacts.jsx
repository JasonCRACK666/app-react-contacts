import LayoutMain from "../components/layouts/LayoutMain";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../services/contactsServices";
import { setContacts } from "../redux/slices/contactsSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const token = localStorage.getItem("token");

  const setContactsRedux = async (token) => {
    const contacts = await getContacts(token);
    dispatch(setContacts(contacts));
  };

  useEffect(() => {
    setContactsRedux(token);
  }, [token]);

  return (
    <LayoutMain>
      {/* // TODO: hacer un mapeo de los contactos */}
      <div className="grid"></div>
    </LayoutMain>
  );
};

export default Contacts;
