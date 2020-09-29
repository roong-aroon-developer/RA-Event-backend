import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    });
});

app.listen(8080, () => {
    console.log("Server is running on 8080");
});