import leaderboardActions from './leaderboard-actions.js';
import LeaderboardUtils from './leaderboard-utils.js';
import ApiAccess from '../api/api-access.js';
import display from './leaderboard-interface.js';

const utils = new LeaderboardUtils();
const apiCalls = new ApiAccess();

const registerActions = () => {
  leaderboardActions.onScoreSubmited.addActions(() => display.toggleDisabled('Uploading...'),
    () => display.toggleLoadingAnimation(display.addScoreHeader));

  leaderboardActions.onScoreSucces.addActions(
    display.clearTable,
    display.cleanInputs,
    () => display.toggleDisabled('Submit your score'),
    () => utils.displayScore(display),
    () => display.toggleLoadingAnimation(display.addScoreHeader),
  );

  leaderboardActions.onRefreshRequested.addActions(
    display.clearTable,
    () => utils.displayScore(display),
  );

  leaderboardActions.onRefreshSuccess.addActions();
};

const setNewGame = () => {
  const useSetRoute = true;
  const getId = (str) => (str.split(' ')[3]);

  if (!useSetRoute) {
    apiCalls.postGameToApi().then((game) => {
      const id = getId(game.result);
      apiCalls.setNewDirection(id);
    });
  }
};

const setUp = () => {
  registerActions();
  setNewGame();
};

export { setUp as default };
