import express from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import articleRouter from "./routes/articlesRouting.js"
import eventsRouter from "./routes/eventsRouting.js";
import healthRouter from "./routes/healthRouting.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(loggerMiddleware);

// Usar morgan para registrar todas las solicitudes HTTP
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

expressApp.use(healthRouter);
expressApp.use(articleRouter);
expressApp.use(eventsRouter);


expressApp.use(errorHandler);

expressApp.listen(PORT, () => console.log(`listening on port ${PORT}`));

export default expressApp;