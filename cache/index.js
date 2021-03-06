const express = require("express");
const NodeCache = require("node-cache");
const axios = require("axios");

const app = express();
const nodeCache = new NodeCache();

const port = 3010;
// const calculateExpressionLink = "http://calculator:3000/calculate";
const calculateExpressionLink = "http://localhost:3000/calculate";

app.use(express.json());

app.post("/exp", async (req, res) => {
  try {
    const exp = req.body.expression;
    const inCache = nodeCache.get(req.body.expression);
  
    let result = inCache;
    let type = 'cache';
    if (!inCache) {
      type = 'calc';
      const calculatedResult = await axios.post(calculateExpressionLink, { expression: req.body.expression });
      result = calculatedResult.data.result;
      
      nodeCache.set(exp, result);
    }
  
    res.json({
      result,
      type
    });
  } catch (e) {
    console.log('e = ', e)
  }
});

app.listen(port, () => {
  console.log(`Cache app listening at http://localhost:${port}`);
});
