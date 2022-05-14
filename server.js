import express from 'express';
import { create } from 'express-handlebars'
import { ProductController } from './controller/product.controller.js';
import { ProductRepository } from './repository/product.repository.js';
import { routes } from './routes/product.route.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const uri = 'mongodb://localhost:27017/base';

const PORT = process.env.PORT || 3000;
const TEMPLATING_EXT = '.hbs';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const hbs = create({ extname: TEMPLATING_EXT });
app.engine(TEMPLATING_EXT, hbs.engine);
app.set('view engine', TEMPLATING_EXT);

app.use(express.urlencoded({
    extended: true
}));

const repository = new ProductRepository();
const controller = new ProductController(repository);

app.use(express.static(path.join(__dirname, '/public/')));


app.use('/', routes(controller));


app.use((req, res) => {
    console.log('Route error');
    res.set('Content-Type', 'application/json');
    res.status(404).json({ error: 'Page not found' })
});

app.use((error, req, res, next) => {
    console.log('Fatal server error', error);
    res.set('Content-Type', 'application/json');
    res.status(500).json({ error: 'Fatal Server error' })
});


mongoose.connect(uri, (error) => {
    if (error) throw error;
    // Ready...
    console.log("BDD OK")
});

app.listen(PORT, () => {
    console.log('Adresse du serveur: http://localhost:' + PORT);
});