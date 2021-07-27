import LocalStorage from '../utils/localStorage.js';
import leaderboardActions from './leaderboard-actions.js';
import LeaderboardUtils from './leaderboard-utils.js';

const storage = new LocalStorage();
const utils = new LeaderboardUtils();

const registerActions = () => {
  leaderboardActions.onScoreSubmited.addActions(utils.setScore);
  leaderboardActions.onRefreshRequested.addActions(utils.getScore);
};

const setUp = () => {
  const getId = (str) => (str.split(' ')[3]);

  registerActions();
  if (storage.isEmpty()) {
    //apiCalls.postGameToApi().then((game) => storage.saveData({ data: getId(game.result) }));
  }
};

export { setUp as default };