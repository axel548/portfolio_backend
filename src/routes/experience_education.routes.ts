import { Router } from 'express';
import { getExperienceEducation, updateExperienceEducation } from '../controllers/experience_education.controller';

const router = Router();

router.get('/', getExperienceEducation);
router.put('/', updateExperienceEducation);

export default router;