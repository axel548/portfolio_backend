
import { Router } from 'express';
import { getCv } from '../controllers/cv.controller';

const router = Router();

router.get('/', getCv);

export default router;
