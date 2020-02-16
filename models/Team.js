const mongoose = require('mongoose');
const User = require('./User');

const teamSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true,
        unique : true
    },
    event : {
        type : Number,
        required : true
    },
    user : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ]
})

module.exports = mongoose.model('Team' , teamSchema);