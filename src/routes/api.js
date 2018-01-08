import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: '000',
    message: 'API route'
  });
});

export default router;
