import { Router } from 'express';
import { getGeneral, updateGeneral } from '../controllers/general.controller';

const router = Router();

router.get('/', getGeneral);
router.put('/', updateGeneral);

export default router;