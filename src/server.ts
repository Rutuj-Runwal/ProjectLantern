import express from "express";
import router from "./router";
import cors from "cors";
import * as dotenv from "dotenv";
import { protect } from "./modules/auth";
import { createNewUser, signInUser } from "./handlers/user";
dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello");
});

app.use("/api", protect, router);
app.use("/signup", createNewUser);
app.use("/signin", signInUser);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
