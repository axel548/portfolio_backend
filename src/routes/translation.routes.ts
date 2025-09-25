import { Router } from 'express';
import { getTranslations } from '../controllers/translation.controller';

const router = Router();

router.get('/:lang', getTranslations);

export default router;
