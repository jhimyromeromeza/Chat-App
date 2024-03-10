import { Router } from "express";
import { sendMessage } from "../controllers/message.controllers.js";
import { protectRoutes } from "../middlewares/protectRoutes.js";
import { getMessages } from "../controllers/message.controllers.js";

const router = Router();

router.get('/:id', protectRoutes, getMessages)
router.post('/send/:id', protectRoutes ,sendMessage);

export default router;