const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59d5973671cce644c95832ad';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id // mongoose can take the string and convert it to an object ID
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id // mongoose can take the string and convert it to an object ID
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found'); // handle the error properly
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '59d58372647a5beeb8f83a18';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
