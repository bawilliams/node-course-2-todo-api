var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}) // using objects opens us up for a more flexible future
    }, (e) => {
        res.status(400).send(e);
    });
});

// :id allows you to create that variable and query by it
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // validate ID using ObjectID method isValid
        // if invalid, stop function execution and respond with 404, send back empty body
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // findById
    Todo.findById(id).then((todo) => {
        // success
        if (!todo) {
            // if no todo - send back 404 with empty body
            return res.status(404).send();
        }
            // if todo - send it back
        res.send({todo});
            
    }).catch((e) => {
        res.status(404).send();
    });
        
app.delete('/todos/:id', (req, res) => {
    // get the id
    var id = req.params.id;

    // validate the id -> not valid? return 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        // success
            // if no doc, send 404
            if (!todo) {
                return res.status(404).send();
            }
            // if doc, send doc back with 200
            res.send({todo});
        // error
        }).catch((e) => {
            // 400 with empty body
            res.status(400).send();
        })
    });     
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};