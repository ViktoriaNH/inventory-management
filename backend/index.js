import { loadEnv } from "./src/config/env.js";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { corsOptions } from "./src/config/cors.js";
import { csp, logger } from "./src/middlewares/security.js";
import userRoutes from "./src/routes/user-routes.js";

const { PORT } = loadEnv();

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(logger);
app.use(csp);

app.use(clerkMiddleware());
app.use("/api/users", userRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
