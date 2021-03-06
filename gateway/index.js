const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
  target: "http://localhost:3010",
  pathRewrite: {
    '/api/exp': '/exp',
  },
};

const apiProxy = createProxyMiddleware(options);

const app = express();
app.use("/api", apiProxy);
app.listen(3001);
