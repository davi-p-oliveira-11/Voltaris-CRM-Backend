import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import clientRoutes from "./routes/clientRoutes"

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes)


app.listen(port, () => {
  console.log("Server listening on port 3000");
});
