
import express from 'express';
import controller from './search.controller';
import auth from '../../auth/auth.service';

var router = express.Router();

router.get('/keys/', auth.hasRole('admin'), controller.indexKeys);
router.get('/keys/:application', auth.hasRole('admin'), controller.showKey);
router.delete('/keys/:application', auth.hasRole('admin'), controller.destroyKey);
router.post('/keys/', auth.hasRole('admin'), controller.createKey);
router.post('/image/:application/:page/', controller.search);
router.post('/image/:application/:page/:limit/', controller.search);

module.exports = router;