import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
