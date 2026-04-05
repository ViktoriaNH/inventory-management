export const fetchSearchByText = (api, text) => {
  return api(`/api/search?q=${text}`);
};