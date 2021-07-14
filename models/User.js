const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
     firstname: String,
     lastname: String,
     email: String,
     age: Number
});
module.exports = mongoose.model('User', UserSchema);