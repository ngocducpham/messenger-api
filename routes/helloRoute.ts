import express from 'express';
import { hello } from '../controllers/hello';

const router = express.Router();

router.route('/').get(hello)

export default router;