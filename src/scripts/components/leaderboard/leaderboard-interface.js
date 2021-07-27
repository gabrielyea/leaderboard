import leaderboardActions from './leaderboard-actions.js';

class LeaderboardInterface {
  form = document.querySelector('form');

  refresh = document.querySelector('.refresh-btn');

  constructor() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.form.querySelector('.player-name');
      const score = this.form.querySelector('.player-score');
      leaderboardActions.onScoreSubmited.doActions(
        { param: { user: name.value, score: score.value } },
      );
    });

    this.refresh.addEventListener('click', () => {
      leaderboardActions.onRefreshRequested.doActions({});
    });
  }
}

const leaderboardInterface = new LeaderboardInterface();
export { leaderboardInterface as default };