import app from '../server'
import mongoose = require('mongoose')
import request from "supertest";

describe("GET / - testing 200 OK", () => {
    it("Hello API Request", async () => {
      const result: any = await request(app).get("/events");
      expect(result.statusCode).toEqual(200)
    });
    afterAll(async()=> {
      await mongoose.connection.close()
    })
  });