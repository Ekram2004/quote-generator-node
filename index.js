const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

const quotes = [
  "Do not settle for average.",
  "You can do it.",
  "Be strong no matter what.",
  "It is a must, not an option.",
  "Earn more.",
  "There's always a way.",
  "Allah is always with you.",
];

app.get("/api/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.post("/api/quote", (req, res) => {
  const { quote } = req.body;
  if (quote && quote.trim() !== "") {
    quotes.push(quote.trim());
    res.status(201).json({ message: "Quote added successfully!" });
  } else {
    res.status(400).json({ message: "Quote cannot be empty" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
