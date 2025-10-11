import { Router } from 'express';
import { getExperienceEducation } from '../controllers/experience_education.controller';

const router = Router();

router.get('/', getExperienceEducation);

export default router;