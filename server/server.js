const express = require ('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 

require('dotenv').config(); 

// SETUP EXPRESS SERVER
const app = express(); 
const port = process.env.PORT || 5000;

// SETUP MIDDLEWARE
app.use(cors()); 
app.use(express.json()); 

// SETUP MONGOOSE
const uri = process.env.ATALAS_URI; 
mongoose.connect(uri, { useNewUrlParser: true }); 
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully"); 
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); 
}); 