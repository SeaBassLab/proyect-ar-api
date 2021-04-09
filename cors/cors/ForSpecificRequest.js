const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = { origin: "http://example.com" };

app.use(cors(corsOptions));

app.get("/products/:id", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(8000, function() {
  console.log("CORS-enabled web server listening on port 8000");
})