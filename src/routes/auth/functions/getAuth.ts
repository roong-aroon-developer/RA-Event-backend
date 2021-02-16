import express = require('express');
import jwt = require("jwt-simple");
import passport = require("passport");
import { jwtAuth } from './../../functions/jwtAuth';

const router = express.Router()
const SECRET = process.env.jwtSecret

passport.use(jwtAuth);

export const getAuth = router.post('/', async (req: express.Request, res: express.Response) =>{
    const payload = {
        sub: req.body.username,
        iat: new Date().getTime()
    }
    
    res.status(200).send(jwt.encode(payload, JSON.stringify(SECRET)))
})
