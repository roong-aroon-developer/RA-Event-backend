import express = require("express");
import { IResponse } from "./types/types";
import { EventModel } from "../models/eventModel";
import passport = require("passport");
import { jwtAuth, requireJWTAuth } from "../../functions/jwtAuth";

passport.use(jwtAuth);
const router = express.Router();

export const createEvent = router.post(
  "/",
  requireJWTAuth,
  async (req: express.Request, res: express.Response) => {
    try {
      const payload = req.body;
      const event = new EventModel(payload);
      await event.save();
      const response: IResponse = {
        status: "success",
        data: "data created",
      };
      return res.status(201).send(response);
    } catch (e) {
      const response: IResponse = {
        status: "failed",
        data: "data conflict",
      };
      return res.status(409).send(response);
    }
  }
);
