import express = require("express");
import { IResponse } from "./types/types";
import { EventModel } from "../models/eventModel";
import passport = require("passport");
import { jwtAuth, requireJWTAuth } from "../../functions/jwtAuth";

passport.use(jwtAuth);
const router = express.Router();

export const findEvent = router.put(
  "/:n",
  requireJWTAuth,
  async (req: express.Request, res: express.Response) => {
    
      try {
        const { n }: any = req.params;
        const payload: any = req.body;
        const update = await EventModel.find({ name: n }).update({
          $set: payload,
        });
        const response: IResponse = {
          status: "success",
          data: update,
        };
        return res.status(200).send(response);
      } catch (e) {
        const response: IResponse = {
          status: "failed",
          data: "data not updated",
        };
        return res.status(400).send(response);
      }
    
  }
);
