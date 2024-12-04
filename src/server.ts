import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
