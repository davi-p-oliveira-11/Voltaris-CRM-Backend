import express from 'express';

import * as clientController from '../controllers/clientController'

const router = express.Router();

router.get('/clients', clientController.getClients);
router.post('/clients', clientController.createClient);

export default router;