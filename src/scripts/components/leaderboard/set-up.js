import LocalStorage from '../utils/localStorage.js';
import ApiAccess from '../api/api-access.js';
import leaderboardActions from './leaderboard-actions.js';

const apiCalls = new ApiAccess();
const storage = new LocalStorage();

const registerActions = () => {
  leaderboardActions.onScoreSubmited.addActions(
    apiCalls.postScoreToApi,
  );
};

const setUp = () => {
  const getId = (str) => (str.split(' ')[3]);

  registerActions();
  if (storage.isEmpty()) {
    apiCalls.postGameToApi().then((game) => storage.saveData({ data: getId(game.result) }));
  }
};

export { setUp as default };