import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import tokenRouter from "./resources/tokens/token.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4200;

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use((req, res) => {
  res.send("Hello from the server");
});

app.use("/api/tokens", tokenRouter);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Solana API is serving on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
