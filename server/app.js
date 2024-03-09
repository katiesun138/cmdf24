const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORTNUM || 8080;
app.listen(port, () => {
  console.log(`Running on PORT ${port}!`);
});

app.get("/", (req, res) => res.status(200).send("hello world!"));

// app.use("/v1", v1Router);

module.exports = app;
