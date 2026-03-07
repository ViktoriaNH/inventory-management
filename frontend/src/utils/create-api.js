const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const createApi = (getToken) => {
  const request = async (path) => {
    const token = await getToken();

    const response = await fetch(`${BACKEND}${path}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  };

  return request;
};
