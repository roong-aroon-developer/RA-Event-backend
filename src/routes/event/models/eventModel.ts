import mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {type: String, required: true},
    path: {type: String, required: true},
    tags: {type: [String], required: true},
    date: {type: String, required: true},
    img: {type: String, required: true},
    imgAlt: {type: String, required: true},
    body: {type: String, required: true},  
})

export const EventModel = mongoose.model('event', eventSchema)
