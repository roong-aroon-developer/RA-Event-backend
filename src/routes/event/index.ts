import express = require('express');

import { allEvent} from './functions/allEvent'
import { findEvent } from './functions/findEvent'
import { createEvent } from './functions/createEvent'
import { deleteEvent } from './functions/deleteEvent'

const router = express.Router()

const Events = router
    .use("/", allEvent)
    .use("/find", findEvent)
    .use("/create", createEvent)
    .use("/delete", deleteEvent)

export default Events