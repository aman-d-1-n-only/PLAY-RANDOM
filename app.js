const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening at http://localhost:3000`);
});