import Actions from '../utils/actions.js';

class LeaderboardActions {
  form = document.querySelector('form');

  onScoreSubmited = new Actions();

  onRefreshRequested = new Actions();
}

const leaderboardActions = new LeaderboardActions();
export { leaderboardActions as default };