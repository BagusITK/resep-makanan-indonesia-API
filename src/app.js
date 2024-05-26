"use strict";

const express = require("express");

const routes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(routes);
app.get('/', (req, res) => {
  res.send('testing API')
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

