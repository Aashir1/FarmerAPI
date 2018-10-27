const mongoose = require('mongoose');
// var mongodbUrl = 'mongodb://<name>:<password>@ds125381.mlab.com:25381/server';
var mongodbUrl = 'mongodb://localhost:27017/ammarAPI'
mongoose.connect(mongodbUrl, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => {
        console.log('connection is establised: ');
    }).on('error', () => {
        console.log('error occured');
    });

module.exports = mongoose;