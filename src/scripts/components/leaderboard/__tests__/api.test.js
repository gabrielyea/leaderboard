import 'regenerator-runtime/runtime.js';
import ApiAccess from '../../api/api-access.js';
import LeaderboardUtils from '../leaderboard-utils.js';

jest.mock('../../api/api-access.js');

describe('Api access mock operations', () => {
  beforeAll(() => {
    ApiAccess.mockImplementation(() => ({
      getScoresFromApi() {
        const myPromise = new Promise((resolves) => {
          setTimeout(() => {
            resolves('List with scores');
          }, 300);
        });
        return myPromise;
      },
    }));
  });

  it('Get scores method should be able to access api', async () => {
    const api = new ApiAccess();
    const utils = new LeaderboardUtils();
    const data = utils.getScores(api);
    return expect(data).resolves.toBe('List with scores');
  });
});