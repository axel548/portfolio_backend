import { Router } from 'express';
import { getLanguages } from '../controllers/language.controller';

const router = Router();

router.get('/', getLanguages);

export default router;