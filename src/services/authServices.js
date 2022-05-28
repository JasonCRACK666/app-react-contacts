const URL_API = "http://localhost:8000/api";

export const register = async (dataUser) => {
  try {
    const res = await fetch(`${URL_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: dataUser.name,
        email: dataUser.email,
        password: dataUser.password,
        password_confirmation: dataUser.password_confirmation,
      }),
    });
    return res.json();
  } catch (error) {
    return error;
  }
};

export const login = async (dataUser) => {
  try {
    const res = await fetch(`${URL_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: dataUser.email,
        password: dataUser.password,
      }),
    });
    return res.json();
  } catch (error) {
    return error;
  }
};
