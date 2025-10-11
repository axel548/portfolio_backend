import { Router } from 'express';
import { getWorks } from '../controllers/work.controller';

const router = Router();

router.get('/', getWorks);

export default router;
