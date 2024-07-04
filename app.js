import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json());

expressApp.listen(PORT, () => console.log(`listening on port ${PORT}`));

export default expressApp;