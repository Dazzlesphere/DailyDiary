import express from 'express';
import connectDB from './config/db.js';
import dotevn from 'dotenv';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

// Load the config file
// dotevn.config({ path: './config/config.env' });

// // Connect to the database
// connectDB();

const app = express();
const PORT = 3000;

app.use('/users', userRoutes);


// // Setup the body parser
// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.json());

// // Set the default view engine
// app.engine('handlebars', engine({extname: '.hbs'}));
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// // Register the routes
// app.use('/api/users/', userRoutes);
// app.get('/', (req, res) => {
//     res.render('home');
// })

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));