const express = require('express');
const router = express.Router();
const { getRecommendationsForUser } = require('../services/recommendation');

router.get('/:userId', async (req, res) => {
  try {
    const recs = await getRecommendationsForUser(req.params.userId);
    res.json(recs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

module.exports = router;
