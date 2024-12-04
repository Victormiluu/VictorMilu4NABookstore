import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";
import cors from "cors";

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
