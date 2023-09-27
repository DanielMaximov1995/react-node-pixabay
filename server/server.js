const express = require('express');
const cors = require('cors');
require('dotenv').config();
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Routers
app.use('/api/images', imageRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });