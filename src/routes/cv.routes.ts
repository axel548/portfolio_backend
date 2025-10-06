
import { Router } from 'express';
import { getCv } from '../controllers/cv.controller';

const router = Router();

router.get('/:lang', getCv);

export default router;
