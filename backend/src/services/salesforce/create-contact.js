import { callApi } from "../../utils/call-api.js";
import { getHeaders} from '../../helpers/get-headers.js'

export const createContact = async ({
  url,
  token,
  firstName,
  lastName,
  email,
  accountId,
}) => {
  const result = await callApi({
    url: `${url}/services/data/v57.0/sobjects/Contact`,
    method: "POST",
    headers: getHeaders(token),
    body: JSON.stringify({
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      AccountId: accountId,
    }),
  });

  return result.id;
};
