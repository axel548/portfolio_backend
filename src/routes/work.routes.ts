import { Router } from 'express';
import { getWorks, updateWork } from '../controllers/work.controller';

const router = Router();

router.get('/', getWorks);
router.put('/', updateWork);

export default router;
