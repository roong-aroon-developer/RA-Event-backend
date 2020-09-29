import { IUser, UserSchema } from './types';
import express = require('express');
import mongoose = require("mongoose");

const url = "mongodb://localhost:27017/node-api"

const app: express.Application = express();
app.use(express.json);

mongoose.connect(url, { useNewUrlParser: true });

const User = mongoose.model<IUser>('Cat', UserSchema);
const result = new User({ name: "javascritp"});

result.save().then(()=> console.log("meow"))

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Hello World'
    });
});

app.listen(8080, () => {
    console.log("Server is running on 8080");
});