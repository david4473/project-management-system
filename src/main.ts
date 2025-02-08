import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Routes

// Error handling Middleware

app.get("/", (req: Request, res: Response) => {
  res.send("Express app is up and running on Typescript");
});

export default app;
