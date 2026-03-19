import { checkUserInDB } from "../helpers/check-user-in-db.js";
import { handleError } from "../utils/handle-error.js"

export const getUserProfile = async (req, res) => {
    try {
        const user = await checkUserInDB(req);

        res.status(200).json({
            name: user.name, 
            email: user.email
        })

    } catch (error) {
         handleError(res, error);
    }

}