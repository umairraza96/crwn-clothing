const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path");

if (process.env.NODE !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//*****Middlewares*****
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//*****Routes*****
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/test", (req, res) => {
  res.send({ test: "Server is working fine" });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server Started at port : ", port);
});
