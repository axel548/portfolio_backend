import { Router } from 'express';
import { getPersonalInfo, updatePersonalInfo } from '../controllers/personal-info.controller';

const router = Router();

router.get('/', getPersonalInfo);
router.put('/', updatePersonalInfo);

export default router;
