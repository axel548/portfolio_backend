import { Router } from 'express';
import { getServices, updateService } from '../controllers/service.controller';

const router = Router();

router.get('/', getServices);
router.put('/', updateService);

export default router;
