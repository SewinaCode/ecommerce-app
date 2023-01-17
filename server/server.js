import express from "express";
import data from "./data.js";

const app = express();
//test


//takes in 2 params - one is the url and the other is req & res
app.get("/api/products", (req, res) => {
  //res.send - to send data back to the frontend
  res.send(data.products);
});

const port = process.env.PORT || 5000;
//listening to the res.send - takes in 2 params (1. port and 2. callback function to run when server is ready.)
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
