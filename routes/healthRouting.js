import { Router } from "express";
import { healthCheck } from "../controllers/healthController.js";

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
  res.send("PORT OPENED");
});

healthRouter.get(healthCheck);

export default healthRouter;
