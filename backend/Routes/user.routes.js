import {Router } from 'express';
import { protectRoutes } from '../middlewares/protectRoutes.js';
import { getUsers } from '../controllers/user.controller.js';

const router = Router();

router.get('/', protectRoutes, getUsers);

export default router;