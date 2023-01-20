const { application } = require('express');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const app = express();

connectDB();
// Midddleware to use body content of req
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, ()=> console.log(`Server stated at PORT: ${port}  ...`))