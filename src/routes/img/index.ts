import { jwtAuth } from "./../functions/jwtAuth";
import express = require("express");
import multer = require("multer");
import passport = require("passport");

const upload = multer({ dest: __dirname + "/uploads/images" });

passport.use(jwtAuth);
const router = express.Router();

const ImageUpload = router;

ImageUpload.use(express.static("public"));

ImageUpload.post(
  "/upload",
  upload.single("file"),
  (req: express.Request, res: express.Response) => {
    try {
      if (req.file) {
        res.json(req.file.filename);
      }
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

ImageUpload.get("/:fileName", (req: express.Request, res: express.Response) => {
  const { fileName } = req.params;
  try {
    res
      .status(200)
      .sendFile(`./uploads/images/${fileName}`, { root: __dirname });
  } catch (e) {
    res.status(400).send(e);
  }
});

export default ImageUpload;
