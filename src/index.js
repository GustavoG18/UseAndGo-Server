const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
//settings
app.set('port', process.env.PORT || 3000); /// validacion por si existe un puerto
app.set('json spaces', 2);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); // soporte de datos 
app.use(express.json());

//routes
app.use('/api/getAllProducts',require('./routes/getAllProducts'));
app.use('/api/getAllArmyHats',require('./routes/getAllArmyHats'));
app.use('/api/getAllBaseballCaps',require('./routes/getAllBaseballCaps'));
app.use('/api/getAllBerets',require('./routes/getAllBerets'));
app.use('/api/getHatById',require('./routes/getHatById'));
//starting the server
app.listen(process.env.PORT, () => {
    console.log(`Server on port ${app.get('port')}`);
});