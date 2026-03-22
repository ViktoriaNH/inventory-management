export const callApi = async ({ url, method, headers, body }) => {
  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}

