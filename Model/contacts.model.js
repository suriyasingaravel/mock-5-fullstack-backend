const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    fullname:String,
    email:String,
    phoneno:Number,
    label:String,
},{
    versionKey:false
})

const ContactModel = mongoose.model("contact",contactSchema);

module.exports = {ContactModel}