const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  compression = require("compression");

if (process.env.NODE !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

//*****Middlewares*****
// app.use(compression);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api", (req, res) => {
  res.send("API ROUTE");
});

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

app.post("/payment", (req, res) => {
  // console.log("route hit");
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server Started at port : ", port);
});
