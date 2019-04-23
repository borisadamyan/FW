const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const es_api = require('./requests/es_api');


app.use(cors());
app.use(compression());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', express.static('dist/FW-PicsArt', {maxAge: 10000}));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

// app.use( express.static( path.join( __dirname, 'public' )));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Encoding: gzip");
    next();
});


// es_api(app);


const server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});