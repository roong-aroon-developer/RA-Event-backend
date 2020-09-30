import { EventModel } from './models/event';
import express = require('express');
import mongoose = require("mongoose");

const url = "mongodb://localhost:27017/node-api"
const app: express.Application = express();

const db = mongoose.connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log('connected to Mongo!')
}).catch((err)=> {
    console.log(err.message);
    process.exit(-1)
})
app.use(express.json())

app.post('/events', (req: express.Request, res: express.Response) => {
    const payload = req.body;
    const event = new EventModel(payload);
    event.save().then(()=> 
    res.status(201).end()
    ).catch(err=> {
        console.log(err.message)
    })
})

app.get('/', (req: express.Request, res: express.Response) => {
    const events = EventModel.find({})
    events.then((data)=> res.status(200).json(data)
    ).catch(err=> {
        console.log(err.message);
    })
});

app.listen(9000, () => {
    console.log("Server is running on 9000");
});