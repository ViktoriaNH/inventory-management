import { updateSalesforceUser } from "./update-salesforce-user";

export const saveUser = ({ userId, contactId }) =>
  updateSalesforceUser({
    userId,
    salesforceId: contactId,
  });