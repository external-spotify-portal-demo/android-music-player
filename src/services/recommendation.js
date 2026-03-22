const { SpotifyAIRecommendation } = require('spotify-ai-recommendation');

const recommendationEngine = new SpotifyAIRecommendation();

async function getRecommendationsForUser(userId) {
  const recommendations = await recommendationEngine.getRecommendations(userId);
  return recommendations;
}

async function getRecommendationsByGenre(genre, limit) {
  const recommendations = await recommendationEngine.getRecommendationsByGenre(genre, { limit });
  return recommendations;
}

module.exports = {
  getRecommendationsForUser,
  getRecommendationsByGenre,
};
