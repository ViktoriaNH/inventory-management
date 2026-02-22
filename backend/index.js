import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(express.json());
app.use(
  cors({
    origin: FRONTEND,
    credentials: true,
  })
);

app.use("/api/users", userRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS allowed for: ${FRONTEND}`);
});