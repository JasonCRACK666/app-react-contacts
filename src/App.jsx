import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";
import EditContact from "./pages/EditContact";
import CreateContact from "./pages/CreateContact";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact/create" element={<CreateContact />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/contact/:id/edit" element={<EditContact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
