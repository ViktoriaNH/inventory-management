import { createSalesforceAcc, updateSalesforceUser } from "../services/saleforce.js";

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
