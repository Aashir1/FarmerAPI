const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const AuthController = require('./controller/AuthController');
const Weather = require('./controller/weather');
const VerificationMiddleware = require('./middleware/tokenVerification');

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());

app.post('/signin', (req, res) => {
    AuthController.signIn(req, res)
})
app.post('/signup', (req, res) => {
    AuthController.signUp(req, res);
});

app.use(VerificationMiddleware);

app.get('/getweather', (req, res) => {
    console.log('getWeather api calling....');
    Weather.getWeather(req, res);
});

app.listen(app.get('port'), () => {
    console.log('server is running on server 8080');
});


