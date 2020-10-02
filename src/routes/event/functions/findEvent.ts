import express = require("express");
import { IResponse } from "../types/types";
import { EventModel } from "../models/eventModel";

const router = express.Router();

export const findEvent = router.get(
  "/:n",
  async (req: express.Request, res: express.Response) => {
    try {
      const { n }: any = req.params;
      const result = await EventModel.find({ name: n });
      if (result.length) {
        const response: IResponse = {
          status: "success",
          data: result,
        };
        return res.status(200).send(response);
      } else {
        const response: IResponse = {
          status: "failed",
          data: "data not found",
        };
        return res.status(404).send(response);
      }
    } catch (e) {
      const response: IResponse = {
        status: "failed",
        data: "Query Error",
      };
      return res.status(404).send(response);
    }
  }
);
