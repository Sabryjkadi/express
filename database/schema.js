
const { Schema, model } = require('mongoose')

const Test = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const BucketListItem = model('bucketListItem', Test)

module.exports = BucketListItem