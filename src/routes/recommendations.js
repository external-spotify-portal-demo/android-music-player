const express = require('express');
const router = express.Router();
const { getRecommendationsForUser } = require('../services/recommendation');

router.get('/:userId', async (req, res) => {
  try {
    const recommendations = await getRecommendationsForUser(req.params.userId);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
