import express = require("express");
import jwt = require("jwt-simple");
import passport = require("passport");
import { jwtAuth, requireJWTAuth } from "../functions/jwtAuth";
require('dotenv').config();

const router = express.Router();

const SECRET = process.env.JwtSecret;
const Auth = router;

passport.use(jwtAuth);

Auth.get("/", requireJWTAuth, (req, res) => {
    res.status(200).send("success");
});

const loginMiddleWare = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.body.username === process.env.USER 
    && req.body.password === process.env.PASS) next();
    else res.status(401).send("Wrong username and password");
 };

Auth.post("/login", loginMiddleWare, (req, res) => {
    const payload = {
       sub: req.body.username,
       iat: new Date().getTime()
    };
    res.status(200).send(jwt.encode(payload, SECRET!));
 });

export default Auth;
