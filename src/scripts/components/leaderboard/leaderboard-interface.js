import leaderboardActions from './leaderboard-actions.js';

class LeaderboardInterface {
  form = document.querySelector('form');

  refresh = document.querySelector('.refresh-btn');

  tableEntry = document.querySelector('template');

  scoreTable = document.querySelector('table');

  constructor() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.form.querySelector('.player-name');
      const score = this.form.querySelector('.player-score');
      leaderboardActions.onScoreSubmited
        .doActions({ param: { user: name.value, score: score.value } });
    });

    this.refresh.addEventListener('click', () => {
      leaderboardActions.onRefreshRequested.doActions({});
    });
  }

  setLeaderboardDisplay = (scores) => {
    scores.forEach((score) => {
      const row = this.scoreTable.insertRow(1);
      this.createTableElement({ user: score.user, score: score.score, row });
    });
  }

  createTableElement = ({ user, score, row }) => {
    // const clone = this.tableEntry.content.firstElementChild.cloneNode(true);
    row.insertCell(0).innerText = user;
    row.insertCell(1).innerText = score;
  }
}

const leaderboardInterface = new LeaderboardInterface();
export { leaderboardInterface as default };
