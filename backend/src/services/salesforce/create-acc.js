import { getHeaders } from "../../helpers/get-headers";
import { callApi } from "../../utils/call-api";

export const createSalesforceAcc = async ({ url, token, companyName }) => {
  const result = await callApi({
    url: `${url}/services/data/v57.0/sobjects/Account`,
    method: "POST",
    headers: getHeaders(token),
    body: JSON.stringify({
      Name: companyName,
    }),
  });

  return result.id;
};
