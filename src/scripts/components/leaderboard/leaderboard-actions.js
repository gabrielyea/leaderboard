import Actions from '../utils/actions.js';

class LeaderboardActions {
  onScoreSubmited = new Actions();

  onScoreSucces = new Actions();

  onRefreshRequested = new Actions();

  onRefreshSuccess = new Actions();
}

const leaderboardActions = new LeaderboardActions();
export { leaderboardActions as default };