import mongoose = require('mongoose')
import bcrypt = require('bcryptjs')

const userModel = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String
}, { timestamps: true })
