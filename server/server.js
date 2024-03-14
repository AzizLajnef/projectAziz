const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const db =require("./mongodb/index")

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
