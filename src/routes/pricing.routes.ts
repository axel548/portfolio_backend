import { Router } from 'express';
import { getPricing, updatePricing } from '../controllers/pricing.controller';

const router = Router();

router.get('/', getPricing);
router.put('/', updatePricing);

export default router;
