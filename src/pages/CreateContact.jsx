import LayoutMain from "../components/layouts/LayoutMain";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { createContact } from "../services/contactsServices";

const CreateContact = () => {
  const [contact, setContact] = useState({
    name: "",
    last_name: "",
    nickname: "",
    phone_number: "",
    adress: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const nicknameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);

  const handleChange = ({ target }) => {
    setContact({ ...contact, [target.name]: target.value });
  };

  const handleCreateContact = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    nameRef.current.innerHTML = "";
    lastNameRef.current.innerHTML = "";
    nicknameRef.current.innerHTML = "";
    phoneNumberRef.current.innerHTML = "";

    setIsLoading(true);
    const result = await createContact(contact, token);
    console.log(result);
    setIsLoading(false);
    if (result.message === "Unauthenticated.") {
      navigate("/");
    } else if (result.errors) {
      if (result.errors.name) {
        nameRef.current.innerHTML = result.errors.name[0];
      }

      if (result.errors.last_name) {
        lastNameRef.current.innerHTML = result.errors.last_name[0];
      }

      if (result.errors.nickname) {
        nicknameRef.current.innerHTML = result.errors.nickname[0];
      }

      if (result.errors.phone_number) {
        phoneNumberRef.current.innerHTML = result.errors.phone_number[0];
      }
    } else {
      navigate("/contacts");
    }
  };

  return (
    <LayoutMain>
      <div className="flex flex-col items-center w-full">
        <header>
          <h2 className="text-center text-green-500 text-4xl font-bold">
            CREATE CONTACT
          </h2>
        </header>

        <form className="p-6 w-96" onSubmit={handleCreateContact}>
          <div className="mb-4">
            <label className="text-white" htmlFor="name">
              Name:
            </label>
            <input
              className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
                contact.name ? "opacity-100" : "opacity-10"
              } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
              type="text"
              name="name"
              onChange={handleChange}
              value={contact.name}
              id="name"
              placeholder="Enter the name"
            />
            <p ref={nameRef} className="text-md text-red-500"></p>
          </div>

          <div className="mb-4">
            <label className="text-white" htmlFor="lastname">
              Last name:
            </label>
            <input
              className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
                contact.last_name ? "opacity-100" : "opacity-10"
              } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
              type="text"
              name="last_name"
              onChange={handleChange}
              value={contact.last_name}
              id="lastname"
              placeholder="Enter the last name"
            />
            <p ref={lastNameRef} className="text-md text-red-500"></p>
          </div>

          <div className="mb-4">
            <label className="text-white" htmlFor="nickname">
              Nickname:
            </label>
            <input
              className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
                contact.nickname ? "opacity-100" : "opacity-10"
              } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
              type="text"
              name="nickname"
              onChange={handleChange}
              value={contact.nickname}
              id="nickname"
              placeholder="Enter the nickname"
            />
            <p ref={nicknameRef} className="text-md text-red-500"></p>
          </div>

          <div className="mb-4">
            <label className="text-white" htmlFor="phoneNumber">
              Phone number:
            </label>
            <input
              className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
                contact.phone_number ? "opacity-100" : "opacity-10"
              } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
              type="text"
              name="phone_number"
              onChange={handleChange}
              value={contact.phone_number}
              id="phoneNumber"
              placeholder="Enter the phone number"
            />
            <p ref={phoneNumberRef} className="text-md text-red-500"></p>
          </div>

          <div className="mb-4">
            <label className="text-white" htmlFor="adress">
              Adress (optional):
            </label>
            <input
              className={`w-full px-2 py-1 text-white bg-gray-900 border-b-2 ${
                contact.adress ? "opacity-100" : "opacity-10"
              } transition-opacity focus:opacity-100 border-green-500 outline-none block`}
              type="text"
              name="adress"
              onChange={handleChange}
              value={contact.adress}
              id="adress"
              placeholder="Enter the adress"
            />
          </div>
          {isLoading ? (
            <button
              className="px-2 py-1 transition-all opacity-20 text-white rounded-md block w-full text-lg bg-green-500 hover:bg-green-600"
              type="submit"
              disabled
            >
              Creando...
            </button>
          ) : (
            <button
              className="px-2 py-1 transition-all text-white rounded-md block w-full text-lg bg-green-500 hover:bg-green-600"
              type="submit"
            >
              Crear
            </button>
          )}
        </form>
      </div>
    </LayoutMain>
  );
};

export default CreateContact;
