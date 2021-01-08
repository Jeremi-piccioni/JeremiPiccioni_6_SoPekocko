const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } /*,
    date: {
        type: Date,
        defaut: Date.now
    } */
})

module.exports = mongoose.model('Posts', PostSchema)