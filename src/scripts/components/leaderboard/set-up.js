import LocalStorage from '../utils/localStorage.js';
import leaderboardActions from './leaderboard-actions.js';
import LeaderboardUtils from './leaderboard-utils.js';
import ApiAccess from '../api/api-access.js';

const storage = new LocalStorage();
const utils = new LeaderboardUtils();
const apiCalls = new ApiAccess();

const registerActions = () => {
  leaderboardActions.onScoreSubmited.addActions(utils.setScore);
  leaderboardActions.onRefreshRequested.addActions(utils.getScore);
};

const setNewGame = () => {
  const getId = (str) => (str.split(' ')[3]);

  apiCalls.postGameToApi().then((game) => {
    const id = getId(game.result);
    // storage.saveData({ data: getId(id) });
    apiCalls.setNewDirection(id);
  });
};

const setUp = () => {
  registerActions();
  setNewGame();
};

export { setUp as default };
