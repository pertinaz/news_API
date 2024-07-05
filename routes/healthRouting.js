import { Router } from "express";
import { healthCheck } from "../controllers/healthController";

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
  res.send("PORT OPENED");
});

healthRouter.get("/health", healthCheck);

export default healthRouter;
