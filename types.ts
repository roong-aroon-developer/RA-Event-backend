import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    name: String
}

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true}
})
