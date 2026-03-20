const { getRecommendationsForUser } = require('../src/services/recommendation');

jest.mock('spotify-ai-recommendation', () => ({
  fetchAIRecommendations: jest.fn(({ userId }) => {
    return Promise.resolve([
      { trackId: 'track_001', score: 0.95 },
      { trackId: 'track_003', score: 0.87 },
    ]);
  }),
  fetchAIRecommendationsByGenre: ({ genre, limit }) => {
    return Promise.resolve([
      { trackId: 'track_009', score: 0.91 },
    ]);
  },
}));

describe('AI Recommendation Engine', () => {
  test('returns recommendations for a user', async () => {
    const recs = await getRecommendationsForUser('user_001');
    expect(recs).toHaveLength(2);
    expect(recs[0]).toHaveProperty('trackId');
    expect(recs[0]).toHaveProperty('score');
  });
});
