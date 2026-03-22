import { loadEnv } from "./src/config/env.js";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { corsOptions } from "./src/config/cors.js";
import { csp, logger } from "./src/middlewares/security.js";
import userRoutes from "./src/routes/user-routes.js";
import inventoryRoutes from "./src/routes/inventory-routes.js";
import categoryRoutes from "./src/routes/category-routes.js";
import salesforceRoutes from './src/routes/salesforce-routes.js'
import { getAccessToken } from "./src/services/salesforce/get-access-token.js";

const { PORT } = loadEnv();

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(logger);
app.use(csp);

app.use(clerkMiddleware());
app.use("/api/users", userRoutes);
app.use("/api/inventories", inventoryRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/salesforce", salesforceRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

const test = async () => {
  const result = await getAccessToken();
  console.log(result);
};

test();

app.listen(PORT, "0.0.0.0", () => {});
