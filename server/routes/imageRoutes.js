const express = require("express");
const axios = require("axios");
const router = express.Router();
const { PIXABAY_API_KEY } = process.env;

router.get("/", async (req, res) => {
  const { category, page, sortBy } = req.query;

  try {
    const resp = await axios.get(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${category}&page=${page}&per_page=9&order=${sortBy}`
    );

    // I map the object array here and take what I need
    const images = resp.data.hits.map((image) => ({
      id: image.id,
      imageURL: image.webformatURL,
      views: image.views,
      downloads: image.downloads,
      collections: image.collections,
    }));

    res.status(201).json({
      pages: Math.ceil(resp.data.totalHits / 9),
      result: images,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
