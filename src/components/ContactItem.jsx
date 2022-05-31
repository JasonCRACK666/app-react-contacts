import { Link } from "react-router-dom";

const ContactItem = ({
  last_name,
  name,
  nickname,
  phone_number,
  id,
  handleDeleteContact,
}) => {
  return (
    <div className="p-4 bg-gray-800 hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
      <Link
        to={`/contact/${id}`}
        className="text-xl font-semibold text-green-500"
      >
        {nickname}
      </Link>
      <p className="text-xl font-bold text-white">{phone_number}</p>
      <h5 className="text-md text-white opacity-30 mb-2">
        {name + " " + last_name}
      </h5>
      <button
        className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white text-lg"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
