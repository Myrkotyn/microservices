const express = require('express');
const math = require('mathjs');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/calculate', (req, res) => {
  const mathRes = math.evaluate(req.body.expression);

  res.json({
    result: mathRes
  });
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://calculator:${port}`)
});
