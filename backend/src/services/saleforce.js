import { prisma } from "../../prisma/client.js";

export const updateSalesforceUser = async ({ userId, salesforceId }) => {
  return prisma.user.update({
    where: { id: userId },
    data: {
      salesforceId,
      salesforceSyncAt: new Date(),
    },
  });
};

export const createSalesforceAcc = async ({
  companyName,
  userEmail,
  firstName,
  lastName,
}) => {
  return {
    id: "",
    companyName,
    userEmail,
    firstName,
    lastName,
  };
};
