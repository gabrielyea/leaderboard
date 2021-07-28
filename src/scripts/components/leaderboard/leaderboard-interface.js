import leaderboardActions from './leaderboard-actions.js';
import LeaderboardUtils from './leaderboard-utils.js';

const utils = new LeaderboardUtils();
class LeaderboardInterface {
  form = document.querySelector('form');

  refresh = document.querySelector('.refresh-btn');

  tableEntry = document.querySelector('template');

  scoreTable = document.querySelector('table');

  submitBtn = document.querySelector('.submit-btn');

  addScoreHeader = document.querySelector('.add-scores-h2')

  constructor() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.form.querySelector('.player-name');
      const score = this.form.querySelector('.player-score');
      utils.setScores({ user: name.value, score: score.value });
    });

    this.refresh.addEventListener('click', () => {
      leaderboardActions.onRefreshRequested.doActions({});
    });
  }

  setScoresOnBoard = (scores) => {
    this.clearTable();
    scores.forEach((score) => {
      const row = this.scoreTable.insertRow(1);
      this.createTableElement({ user: score.user, score: score.score, row });
    });
  }

  createTableElement = ({ user, score, row }) => {
    row.insertCell(0).innerText = user;
    row.insertCell(1).innerText = score;
  }

  clearTable = () => {
    while (this.scoreTable.rows.length > 1) {
      this.scoreTable.deleteRow(1);
    }
  }

  toggleDisabled = (message) => {
    this.submitBtn.value = message;
    this.submitBtn.disabled = !this.submitBtn.disabled;
  }

  cleanInputs = () => {
    const name = this.form.querySelector('.player-name');
    const score = this.form.querySelector('.player-score');
    name.value = '';
    score.value = '';
  }

  toggleLoadingAnimation = (element) => {
    element.classList.toggle('loading');
  }
}

const leaderboardInterface = new LeaderboardInterface();
export { leaderboardInterface as default };
