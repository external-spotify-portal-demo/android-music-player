const aiReco = require('spotify-ai-recommendation');

async function getRecommendationsForUser(userId) {
  return aiReco.fetchAIRecommendations({ userId });
}

async function getRecommendationsByGenre(genre, limit) {
  return aiReco.fetchAIRecommendationsByGenre({ genre, limit });
}

module.exports = {
  getRecommendationsForUser,
  getRecommendationsByGenre,
};
