import mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    tags: {type: [String], required: true},
    detail: {type: String, required: true},
    coverImg: {type: String, required: true}
})

export const EventModel = mongoose.model('event', eventSchema)
