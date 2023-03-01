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

const users = [
    {
        id: 1,
        username: "f@something.com",
        password: "abc",
        name: "Some Name"
    }
]

const app = express();
const PORT = 3000;

// Setup to accept json in bodyap
app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// Set the default view engine
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
app.get('/login', (req, res) => res.render("login", { pageTitle: "Sign In With", pageClass: "auth-page login-page" }));
app.get('/register', (req, res) => res.render("register", { pageTitle: "Signup", pageClass: "register-page" }));

app.get('/authenticate', (req, res) => {
    res.end();
});

app.post('/authenticate', (req, res) => {
    const authenticated = false;
    const username = req.body.username;
    const password = req.body.password;

    if (req.body.username && req.body.password) {
        const user = users.find(obj => obj.username === username && obj.password === password);
        if (user) {
            return res.end('You are authenticated and your name is' + user.name);
        }
    }
    res.end('username or password is incorrect');
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));