export const callApi = async ({ url, method, headers, body }) => {
  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  return response.json();
};