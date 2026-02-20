import getAuth from "@clerk/clerk-sdk-node";

export const checkUser = (req, res, next) => {
  const { userId } = getAuth(req);

  if (userId) {
    req.userId = userId;
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
