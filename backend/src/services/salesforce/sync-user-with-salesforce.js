import { createAcc } from "./create-acc.js";
import { getAccessToken } from "./get-access-token.js";
import { createContact } from "./create-contact.js";
import { saveUser } from "./save-user.js";

export const syncUserWithSalesforce = async ({
  user,
  companyName,
  firstName,
  lastName,
}) => {
  const { token, url } = await getAccessToken();

  const accountId = await createAcc({
    url,
    token,
    companyName,
  });

  const contactId = await createContact({
    url,
    token,
    firstName,
    lastName,
    email: user.email,
    accountId,
  });

  await saveUser({
    userId: user.id,
    contactId,
  });

  return {
    accountId,
    contactId,
  };
};

