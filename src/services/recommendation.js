const { SpotifyAIRecommendation } = require('spotify-ai-recommendation');

const recommendationEngine = new SpotifyAIRecommendation();

async function getRecommendationsForUser(userId) {
  const recommendations = await recommendationEngine.getRecommendations(userId);
  return recommendations;
}

module.exports = { getRecommendationsForUser };
