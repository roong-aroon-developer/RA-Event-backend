import express = require('express');
import jwt = require("jwt-simple");
import passport = require("passport");
import { jwtAuth } from './../../functions/jwtAuth';
require('dotenv').config();

const router = express.Router()
const SECRET = process.env.jwtSecret

passport.use(jwtAuth);

export const getAuth = router.post('/', async (req: express.Request, res: express.Response) =>{
    const payload = {
        sub: req.body.username,
        iat: new Date().getTime()
    }
    if(req.body.username === process.env.USER && req.body.password === process.env.PASS) {
        res.status(200).send(jwt.encode(payload, JSON.stringify(SECRET)))
    } else {
        res.status(401).send("Wrong username or password")
    }
})
