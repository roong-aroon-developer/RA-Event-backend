import express = require('express');
import mongoose = require("mongoose");

const url = "mongodb://localhost:27017/node-api"

const app: express.Application = express();
app.use(express.json);

mongoose.connect(url, { useNewUrlParser: true });


app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Hello World'
    });
});

app.listen(8080, () => {
    console.log("Server is running on 8080");
});