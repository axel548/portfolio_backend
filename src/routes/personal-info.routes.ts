import { Router } from 'express';
import { getPersonalInfo } from '../controllers/personal-info.controller';

const router = Router();

router.get('/', getPersonalInfo);

export default router;
