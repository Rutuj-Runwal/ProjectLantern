import express from "express";
import router from "./router";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
