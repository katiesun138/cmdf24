const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORTNUM || 8080;
app.listen(port, () => {
  console.log(`Running on PORT ${port}!`);
});

app.get('/', (req, res) => res.status(200).send('hello world!'));

const cohereRouter = require('./routes/cohere');
app.use('/bigsister', cohereRouter);

// app.use("/v1", v1Router);

module.exports = app;
