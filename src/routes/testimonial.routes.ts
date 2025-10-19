import { Router } from 'express';
import { getTestimonials, updateTestimonial } from '../controllers/testimonial.controller';

const router = Router();

router.get('/', getTestimonials);
router.put('/', updateTestimonial);

export default router;
