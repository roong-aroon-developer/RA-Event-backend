import express = require('express');
import { IResponse } from './types/types';
import { EventModel } from '../models/eventModel';

const router = express.Router()

export const allEvent = router.get('/', async (req: express.Request, res: express.Response) =>{
    try {
        const events = await EventModel.find({});
        const response: IResponse = {
          status: "success",
          data: events,
        };
        return res.status(200).send(response);
      } catch (e) {
        const response: IResponse = {
          status: "failed",
          data: "data not found",
        };
        return res.status(404).send(response);
      }
})
