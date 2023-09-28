const express = require("express");
const router = express.Router();
const categories = require('../categories.json')

router.get("/", async (req, res) => {
  try {
    // Respond with the categories read from the JSON file
    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
