import { checkUserInDB } from "../helpers/check-user-in-db.js";
import { syncUserWithSalesforce } from "../helpers/sync-user-with-salesforce.js";
import { handleError } from "../utils/handle-error.js";

export const createSalesforceAccController = async (req, res) => {
  try {
    const user = await checkUserInDB(req);

    const { companyName, firstName, lastName } = req.body;

    const result = await syncUserWithSalesforce({
      user,
      companyName,
      firstName,
      lastName,
    });

    return res.status(201).json(result);
  } catch (error) {
    handleError(res, error);
  }
};
