var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set up our mongoose db to use promises
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); // connect to db

module.exports = {mongoose};