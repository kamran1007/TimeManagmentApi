const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    hours: { type: String, required: true , unique: false },
    note: { type: String , unique:false }
},
    {
        timestamps: true


    })
module.exports = mongoose.model('User', UserSchema)