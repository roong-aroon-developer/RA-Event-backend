import express = require('express')
import { getAuth } from './functions/getAuth';
import { testAuth } from './functions/testAuth';

const router = express.Router()

const Auth = router
    .use("/login", getAuth)
    .use("/verifiled", testAuth)

export default Auth