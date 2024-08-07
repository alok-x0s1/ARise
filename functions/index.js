/**
 * Import function triggers from their respective submodules:
 *
 * const { onCall } = require("firebase-functions/v2/https");
 * const { onDocumentWritten } = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {onRequest} = require("firebase-functions/v2/https");
// const { onDocumentCreated } = require("firebase-functions/v2/firestore");
// const logger = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
// const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(process.env.URL);

// APP config
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({clientSecret: paymentIntent.client_secret});
});

// Listen command
exports.api = onRequest(app);
