const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/search');

require('dotenv').config();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get("/",(req, res) =>{
    res.send("Please sign in on endpoint /api/user/login");
})

app.use('/api/user',userRoutes);  
app.use('/api/search',searchRoutes);  

app.listen(PORT,()=>{
    console.log("Listening on port: " +PORT);
})