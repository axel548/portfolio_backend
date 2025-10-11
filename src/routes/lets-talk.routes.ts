import { Router } from 'express';
import { getLetsTalk } from '../controllers/lets-talk.controller';

const router = Router();

router.get('/', getLetsTalk);

export default router;