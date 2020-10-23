import compression = require("compression")
import express = require("express");

export const shouldCompress = (req: express.Request, res: express.Response) => {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression.filter(req, res)
  }
