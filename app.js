// Get NPM modules
const express = require("express");
// Get App modules
const fm = require("./filemgr");

// Create the express http server
const app = express();

// Define static and middleware
app.use(express.static("./Client"));
app.use(express.json());

app.get("/api", async (req, res) => {
  const data = await fm.ReadData();

  res.send(data);
});

app.post("/api", async (req, res) => {
  await fm.WriteData(req.body);

  res.send({ msg: "Success" });
});

// page not found route
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found...</h1>");
});

const appName = "My List";
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App ${appName} is running on port ${port}`);
});
