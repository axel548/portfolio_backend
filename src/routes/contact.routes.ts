import { Router } from 'express';
import { handleContactRequest } from '../controllers/contact.controller';

const router = Router();

router.post('/', handleContactRequest);

export default router;
