const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Data = mongoose.model('Data', DataSchema);

// API Routes
app.post('/api/data', async (req, res) => {
  const { name, email } = req.body;
  const newData = new Data({ name, email });
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: 'Error saving data' });
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
