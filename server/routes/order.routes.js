import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OrderController from "../controllers/OrderController.js";
const route = express.Router();

route.use(cors());

route.use(
  bodyParser.json({
    extended: true,
  })
);
route.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/*------------ Add Order Data Routes ------------*/

route.post("/addorder", OrderController.addOrder);

/*-----------------    Routes -----------------*/

/*------------ get Data Routes ------------*/

route.get("/", OrderController.getorder);

export default route;
