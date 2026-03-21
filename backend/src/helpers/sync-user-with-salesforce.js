import { createSalesforceAcc } from "../services/salesforce/create-salesforce-acc.js";
import { updateSalesforceUser } from "../services/salesforce/update-salesforce-user.js";

export const syncUserWithSalesforce = async ({
  user,
  companyName,
  firstName,
  lastName,
}) => {
  const response = await createSalesforceAcc({
    user,
    companyName,
    firstName,
    lastName,
  });

  const updatedUser = await updateSalesforceUser({
    userId: user.id,
    salesforceId: response.id,
  });

  return updatedUser;
};
