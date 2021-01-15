import { Router } from 'express';

import { allEvent} from './functions/allEvent'
import { findEvent } from './functions/findEvent'
import { createEvent } from './functions/createEvent'
import { deleteEvent } from './functions/deleteEvent'

const router = Router()
router.use("/", allEvent)
router.use("/find", findEvent)
router.use("/create", createEvent)
router.use("/delete", deleteEvent)

export default router