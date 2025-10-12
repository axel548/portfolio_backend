import { Router } from 'express';
import { getCertifications } from '../controllers/certification.controller';

const router = Router();

router.get('/', getCertifications);

export default router;