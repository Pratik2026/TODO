import express from 'express';
import colors from 'colors';
import tasks from './routes/task.js';
import notFound from './utils/notfound.js';
import error from './utils/errorHandler.js';
import { config } from 'dotenv';
import connectDB from './db/connect_db.js';

const app = express();
const PORT = process.env.PORT || 3000;

//load env variables
config({path: './config/config.env'});

//Connect to DB
connectDB();

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.json());


//Mount routes
app.use('/todo', tasks);
app.use(notFound);
app.use(error);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.blue.bold);
})