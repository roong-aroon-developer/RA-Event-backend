"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var eventSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: [String], required: true },
    detail: { type: String, required: true },
    coverImg: { type: String, required: true }
});
exports.EventModel = mongoose.model('event', eventSchema);
