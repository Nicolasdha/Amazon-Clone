const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Ib7wYDZiWw6xGRDFuCItwFqkvGsAcMJKJhLkv0RWLbLWpkrSAIMb4bWYL3hBHW1wGrgT3m4bW8Zyrmu9eSmcbwL00EwlstlKi"
);

//What we need to set up an API

// App config
const app = express();

// Middlewares
app.use(cors);
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/nicolas", (request, response) =>
  response.status(200).send("hello nicolas")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("this is ze total", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    curreny: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
