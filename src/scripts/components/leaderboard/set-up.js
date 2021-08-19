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
    () => utils.displayUnicorns({ display, api: apiCalls }),
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

const registerEvents = () => {
  display.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = display.form.querySelector('.player-name');
    const score = display.form.querySelector('.player-score');
    utils.setScores({ user: name.value, score: score.value, api: apiCalls });
  });

  display.refreshBtn.addEventListener('click', () => {
    actions.onRefreshRequested.doActions({});
  });
};

const setUp = () => {
  registerActions();
  registerEvents();
  setNewGame();
};

export { setUp as default };
