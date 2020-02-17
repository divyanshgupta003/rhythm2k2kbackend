const mongoose = require('mongoose');
const Event = require('./Event');
const Team = require('./Team');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    eventNumber : [
        {
            type : Number
        }
    ],
    team : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Team'
        }
    ],
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('User' , userSchema);