const mongoose = require('mongoose');
const Team = require('./Team');

const eventSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    rules : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    number : {
        type : Number,
        required : true,
        unique : true
    },
    team : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Team'
        }
    ],
    category : {
        type : String
    },
    maxPart : {
        type : Number,
        required : true
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Event' , eventSchema);