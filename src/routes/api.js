import express from 'express';

let router = express.Router();

router.get('/messages', (req, res, next) => {
  res.json({message: 'Reactrize'});
});

export default router;
