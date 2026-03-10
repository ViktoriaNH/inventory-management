export const handleError = (res, error) => {
  const status = error.status || 500;

  res.status(status).json({
    message: error.message || "Internal server error",
  });
};