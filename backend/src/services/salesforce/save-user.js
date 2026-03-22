import { updateSalesforceUser } from "./update-salesforce-user.js";

export const saveUser = ({ userId, contactId }) =>
  updateSalesforceUser({
    userId,
    salesforceId: contactId,
  });