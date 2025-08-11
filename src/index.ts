import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Voltaris CRM Backend is running 🚀</h1>");
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
