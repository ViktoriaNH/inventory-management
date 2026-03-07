const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const createApi = (getToken) => {
  const request = async (path, options = {}) => {
    const token = await getToken();

    const response = await fetch(`${BACKEND}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  };

  return request;
};
