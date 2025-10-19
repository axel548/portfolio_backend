import { Router } from 'express';
import { getLetsTalk, updateLetsTalk } from '../controllers/lets-talk.controller';

const router = Router();

router.get('/', getLetsTalk);
router.put('/', updateLetsTalk);

export default router;