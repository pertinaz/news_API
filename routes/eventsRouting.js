import { Router } from "express";
import { breakingEvents } from "../controllers/eventsController";

const eventsRouter = Router();

eventsRouter.get("/", (req, res) => {
  res.send("PORT OPENED");
});

eventsRouter.get("/breaking-events", breakingEvents);

export default eventsRouter;
