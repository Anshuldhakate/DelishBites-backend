// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, phone, mealType } = req.body;

  if (!name || !email || !phone || !mealType) {
    return res.status(400).send({ message: "All fields are required" });
  }

  // Handle data saving here (e.g., save to a database)
  console.log(req.body);
  res.send({ message: "Form submitted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
