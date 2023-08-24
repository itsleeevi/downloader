const express = require("express");
const path = require("path");
const PORT = 3003;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || PORT;

app.listen(port, () => {
  console.log("server running on port 3003");
});
