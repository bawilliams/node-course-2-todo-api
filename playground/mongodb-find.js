//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); 



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // You can put your queries inside of find as an argument
    // db.collection('Todos').find({
    //     _id: new ObjectID('59d2ee0d1ec7426502851b32') // allows you to search for ObjectIDs
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // }); // want to fetch all todos; find returns a MongoDB cursor that points to those documents
    // toArray returns a promise

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Hate'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close(); // closes connection to the MongoDB server
});
