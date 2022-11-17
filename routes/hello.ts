import express from 'express';
import { hello } from '../controllers/hello';

const router = express.Router();

router.route('/hello').get(hello)