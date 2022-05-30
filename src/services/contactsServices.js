const URL_API = "http://localhost:8000/api";

export const getContacts = async (token) => {
  try {
    const res = await fetch(`${URL_API}/contacts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getContact = async (id, token) => {
  try {
    const res = await fetch(`${URL_API}/contact/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createContact = async (contact, token) => {
  try {
    const res = await fetch(`${URL_API}/contact/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        last_name: contact.last_name,
        nickname: contact.nickname,
        phone_number: contact.phone_number,
        adress: contact.adress,
      }),
    });
    return res.json();
  } catch (error) {
    return error;
  }
};

export const updateContact = async (contact, id, token) => {
  try {
    const res = await fetch(`${URL_API}/contact/${id}/update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });
    return res.json();
  } catch (error) {
    return error;
  }
};
