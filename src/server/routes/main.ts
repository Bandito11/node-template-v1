import { Router } from 'express';

const router = Router();

router.get('/', async function (req, res, next) {
    res.send('Hi from node');
});

module.exports = router;
