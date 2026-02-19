import { Router} from 'express';

const router = Router();

router.post('/', userController.create);