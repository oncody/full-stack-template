const express = require('express');
const router = express.Router();

router.get('/3', (req, res) => {
  res.send('Route 3!!');
});

module.exports = router;
