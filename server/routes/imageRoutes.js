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

    // Map relevant data from the response
    const result = resp.data.hits.map(item => ({
      id: item.id,
      collections : item.collections,
      comments : item.comments,
      likes : item.likes,
      views : item.views,
      downloads : item.downloads,
      user : item.user,
      userImageURL : item.userImageURL,
      webformatURL : item.webformatURL,
      tags : item.tags,
    }))

    // Calculate the number of pages based on the total hits
    const pages = Math.ceil(resp.data.totalHits / 9);

    res.status(201).json({
      pages,
      result,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
