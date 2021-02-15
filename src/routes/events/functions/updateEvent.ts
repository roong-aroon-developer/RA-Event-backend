import express = require('express');
import { IResponse } from './types/types';
import { EventModel } from '../models/eventModel';

const router = express.Router()

export const findEvent = router.put('/:n', async (req: express.Request, res: express.Response) =>{
  if (req.header("autherization") === process.env.ADMIN_SECRET) {

  } else {
    return res.status(401).send("unauthorized");
  } 
  try{
        const { n }: any = req.params;
        const payload: any = req.body;
        const update = await EventModel.find({ name: n }).update({ $set: payload })
        const response: IResponse = {
          status: "success",
          data: update
        }
        return res.status(200).send(response)
      } catch(e) {
        const response: IResponse = {
          status: "failed",
          data: "data not updated"
        }
        return res.status(400).send(response)
      }
})
