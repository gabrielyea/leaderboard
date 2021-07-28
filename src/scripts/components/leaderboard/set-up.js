import actions from './leaderboard-actions.js';
import LeaderboardUtils from './leaderboard-utils.js';
import ApiAccess from '../api/api-access.js';
import display from './leaderboard-interface.js';

const utils = new LeaderboardUtils();
const apiCalls = new ApiAccess();

const registerActions = () => {
  actions.onScoreSubmited.addActions(
    () => display.toggleDisabled('Uploading...', display.submitBtn),
    () => display.toggleAnimation('loading', display.addScoreHeader),
  );

  actions.onScoreSucces.addActions(
    display.clearTable,
    display.cleanInputs,
    () => display.toggleDisabled('Submit your score', display.submitBtn),
    () => display.toggleAnimation('loading', display.addScoreHeader),
    () => actions.onRefreshRequested.doActions({}),
  );

  actions.onRefreshRequested.addActions(
    display.clearTable,
    () => display.toggleDisabled('Looking...', display.refreshBtn),
    () => display.toggleAnimation('loading', display.recentScoreHeader),
    () => display.toggleAnimation('show', display.scoreTable),
    () => utils.displayScore(display),
  );

  actions.onRefreshSuccess.addActions(
    () => display.toggleDisabled('Refresh', display.refreshBtn),
    () => display.toggleAnimation('loading', display.recentScoreHeader),
    () => display.toggleAnimation('show', display.scoreTable),
  );
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
