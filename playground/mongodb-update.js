//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59d42a55075fef2cbad9fe74') //filter
    // }, {
    //     $set: { //operator
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false  //options
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59d2efc88405e566650cf18c') //filter
    }, {
        $set: { //operator
            name: 'Baylee'
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false  //options
    }).then((result) => {
        console.log(result);
    });

});
