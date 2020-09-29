import { IUser, UserSchema } from './types';
import express = require('express');
import mongoose = require("mongoose");

const app: express.Application = express();
app.use(express.json);

mongoose.connect('mongodb://localhost:27017/node-api');

const User = mongoose.model<IUser>('Cat', UserSchema);

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Hello World'
    });
});

app.listen(8080, () => {
    console.log("Server is running on 8080");
});