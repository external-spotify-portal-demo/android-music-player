const aiReco = require('ai-recommendation-engine');

async function getRecommendationsForUser(userId) {
  return aiReco.recommend({ userId });
}

async function getRecommendationsByGenre(genre, limit) {
  return aiReco.recommend({ genre, limit });
}

module.exports = {
  getRecommendationsForUser,
  getRecommendationsByGenre,
};
