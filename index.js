const express = require("express");
const path = require("path");
const PORT = 3003;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || PORT;

app.get("/client.zip", (req, res) => {
  const filePath = path.join(__dirname, "public", "client.zip");
  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", "attachment; filename=client.zip");
  res.setHeader("Content-Length", fs.statSync(filePath).size);
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log("server running on port 3003");
});
