const express = require('express');

require('dotenv').config();

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5050;



// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(cors());
app.use('/api/assignment',require('./routes/assignmentRoutes'));
app.use('/api/auth',require('./routes/authRoutes'));


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})