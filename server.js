const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0"; 

app.get("/", (req, res) => {
  res.json({ message: "CI/CD with GitHub Actions is working!" });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});