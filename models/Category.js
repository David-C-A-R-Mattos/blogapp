const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Category = new Schema(
{
    name:
    {
        type: String,
        required: true
    },
    slug:
    {
        type: String,
        required: true
    },
    date:
    {
        type: Date,
        default: Date.now
    }
})
mongoose.model('categories', Category)
