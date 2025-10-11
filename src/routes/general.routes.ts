import { Router } from 'express';
import { getGeneral } from '../controllers/general.controller';

const router = Router();

router.get('/', getGeneral);

export default router;