import express from "express";
import { ethers } from "ethers";
const app = express();

app.get("/", (req, res) => {
  console.log("d");
  res.json("hello");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
