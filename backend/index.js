import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.routes.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

console.log("BACKEND ENV CHECK:");
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(express.json());
app.use(
  cors({
    // origin: FRONTEND,
    origin: "*", // Временно разрешаем всё
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use((req, res, next) => {
  console.log("➡️ BACKEND GOT:", req.method, req.url);
  next();
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' https://*.clerk.com https://*.clerk.accounts.dev",
      "frame-src https://*.clerk.com https://*.clerk.accounts.dev",
      "connect-src 'self' http://localhost:3000 https://inventory-management-6e51.onrender.com https://*.clerk.com https://*.clerk.accounts.dev",
      "img-src 'self' data: https://*.clerk.com https://*.clerk.accounts.dev",
      "style-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  );
  next();
});

app.use(clerkMiddleware());
app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS allowed for: ${FRONTEND}`);
});
