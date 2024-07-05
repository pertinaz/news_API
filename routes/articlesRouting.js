import { Router } from "express";
import { articles, articleDetails } from "../controllers/articlesController.js";

const articleRouter = Router();

articleRouter.get("/", (req, res) => {
  res.send("PORT OPENED");
});

articleRouter.get("/articles", articles);
articleRouter.get("/articles/:id", articleDetails);

export default articleRouter;
