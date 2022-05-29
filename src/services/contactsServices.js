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