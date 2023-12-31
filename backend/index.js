import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  credentials: true,
  origin: process.env.URL || "../public/index.html",
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.sendfile(__dirname + "./public/index.html");
});

// app.use("/", express.static(join(__dirname, "./public")));

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
