const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user');

app.get("/",(req, res) =>{
    res.send("Please sign in on endpoint /api/user/login");
})

app.get('/api/user',userRoutes);

app.listen(PORT,()=>{
    console.log("Listening on port: " +PORT);
})