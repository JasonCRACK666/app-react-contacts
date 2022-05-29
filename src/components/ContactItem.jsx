import { Link } from "react-router-dom";

const ContactItem = ({ last_name, name, nickname, phone_number, id }) => {
  return (
    <Link
      to={`/contact/${id}`}
      className="p-4 bg-gray-800 hover:bg-gray-700 rounded-md cursor-pointer transition-colors"
    >
      <h4 className="text-xl font-semibold text-green-500">{nickname}</h4>
      <p className="text-xl font-bold text-white">{phone_number}</p>
      <h5 className="text-md text-white opacity-30">
        {name + " " + last_name}
      </h5>
    </Link>
  );
};

export default ContactItem;
