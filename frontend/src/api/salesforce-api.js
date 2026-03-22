export const createSalesforceAccount = (api, formData) => {
  return api("/api/salesforce/create-account", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
