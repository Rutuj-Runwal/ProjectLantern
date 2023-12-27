import express from "express";
import router from "./router";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
