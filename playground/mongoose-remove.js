const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// }); // does not give the removed documents back

// returns the doc
// Todo.findOneAndRemove({_id: '59d6de87075fef2cbada1fbd'}).then((todo) => {
//     console.log(todo);
// });

// also returns the doc
// Todo.findByIdAndRemove('59d6de87075fef2cbada1fbd').then((todo) => {
//     console.log(todo);
// });