const mongoose = require('mongoose');
const Team = require('./Team');

const eventSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    number : {
        type : Number,
        required : true,
        unique : true
    }
    // team : [
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : 'Team'
    //     }
    // ]
});

module.exports = mongoose.model('Event' , eventSchema);