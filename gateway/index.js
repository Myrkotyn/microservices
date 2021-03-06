const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const cacheLink = "http://cache:3010/exp";
const port = 3001;

app.post("/api/exp", async (req, res, next) => {
  const expressions = req.body.expressions;

  const promises = expressions.map(exp => {
    return axios.post(cacheLink, { expression: exp });
  });
  const result = (await Promise.all(promises)).map(r => r.data);

  res.json(result);
});

app.listen(port, () => {
    console.log(`Your app listening at http://localhost:${port}`)
});
