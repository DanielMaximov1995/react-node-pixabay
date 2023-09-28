const express = require('express');
const cors = require('cors');
require('dotenv').config();
const imageRoutes = require('./routes/imageRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Routers
app.use('/api/images', imageRoutes);
app.use('/api/categories', categoriesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });