const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jazzySchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    },
    category: {
        type: 'string',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: 'string',
        required: true,
    },

},{timestamps: true});

const BURGERS = mongoose.model('newJazzy', jazzySchema)

module.exports = BURGERS;