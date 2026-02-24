import dotenv from "dotenv";

export const loadEnv = () => {
  dotenv.config({ path: "./.env" });

  return {
    PORT: process.env.PORT || 3000,
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  };
};