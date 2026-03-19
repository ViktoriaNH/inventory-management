import { Router} from 'express';
import { createSalesforceAccController } from '../controllers/create-salesforce-account.js';

const router = Router();

router.post('/create-account', createSalesforceAccController)

export default router;