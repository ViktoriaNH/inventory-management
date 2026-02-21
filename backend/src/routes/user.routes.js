import { Router} from 'express';
import {createUser} from '../controllers/createUser.js'
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const router = Router();

router.post('/', ClerkExpressRequireAuth(), createUser); 

export default router; 