const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const createCheckoutSession = require("./api//checkout");

const app = express();
const port = 8080;

app.use(express.json({
    verify: (req, res, buffer) => req["rawBody"] = buffer,
}));

app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create-checkout-session", createCheckoutSession);

app.listen(port, () => console.log("Server listening on port", port));
