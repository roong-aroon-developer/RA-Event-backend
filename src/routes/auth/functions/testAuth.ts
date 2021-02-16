import express = require('express');
import jwt = require("jwt-simple");
import passport = require("passport");
import { jwtAuth, requireJWTAuth } from "../../functions/jwtAuth";
passport.use(jwtAuth);

const router = express.Router()

export const testAuth = router.get('/',requireJWTAuth, async (req: express.Request, res: express.Response) =>{
    res.send("ยอดเงินคงเหลือ 50");
})
