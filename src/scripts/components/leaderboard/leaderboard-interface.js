class LeaderboardInterface {
  form = document.querySelector('form');

  tableEntry = document.querySelector('template');

  scoreTable = document.querySelector('table');

  submitBtn = document.querySelector('.submit-btn');

  refreshBtn = document.querySelector('.refresh-btn');

  addScoreHeader = document.querySelector('.add-scores-h2')

  recentScoreHeader = document.querySelector('.recent-scores-h2');

  setScoresOnBoard = (scores) => {
    this.clearTable();
    scores.forEach((score) => {
      const row = this.scoreTable.insertRow(1);
      this.createTableElement({ user: score.user, score: score.score, row });
    });
  }

  setUnicornsOnBoard = (scores) => {
    this.clearTable();
    scores.forEach((score) => {
      const row = this.scoreTable.insertRow(1);
      // eslint-disable-next-line no-underscore-dangle
      this.createTableElement({ user: score._id, score: score.age, row });
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

  toggleDisabled = (message, element) => {
    element.value = message;
    element.innerText = message;
    element.disabled = !element.disabled;
  }

  cleanInputs = () => {
    const name = this.form.querySelector('.player-name');
    const score = this.form.querySelector('.player-score');
    name.value = '';
    score.value = '';
  }

  toggleAnimation = (animationName, element) => {
    element.classList.toggle(animationName);
  }
}

const leaderboardInterface = new LeaderboardInterface();
export { leaderboardInterface as default };
