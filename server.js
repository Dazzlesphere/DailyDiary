//import path from 'path';


import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import dotevn from 'dotenv';
import { create as createEngine } from 'express-handlebars';
// import userRoutes from './routes/users.js';
import helpers from './lib/helpers.js';

// Load the config file
// dotevn.config({ path: './config/config.env' });

// // Connect to the database
// connectDB();

const app = express();
const PORT = 3000;

//app.use('/users', userRoutes);

// Setup to accept json in bodyap
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());

// // Set the default view engine
const hbs = createEngine({
    extname: '.hbs',
    defaultLayout: 'default',
    helpers: helpers
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

// make express to serve static files from the public folder
app.use(express.static('public'));

// Register the routes
//app.get('/login', (req, res) => res.render("login", { pageTitle: "Get Going!!!", pageClass: "login-page" }))

app.post('/authenticate', (req, res) => {
    console.log(req.body);
    res.end();
})

app.get('/login', (req, res) => {
    res.render('login', { pageTitle: "Login" });
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));