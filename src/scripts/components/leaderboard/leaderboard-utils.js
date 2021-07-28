import ApiAccess from '../api/api-access.js';
import MyList from '../utils/list-utils.js';
import actions from './leaderboard-actions.js';

export default class LeaderboardUtils {
  setScores = async ({ user, score }) => {
    actions.onScoreSubmited.doActions({});
    const response = await this.getApiAccess().postScoreToApi({ user, score });
    if (response.ok) {
      actions.onScoreSucces.doActions({});
    }
  }

  displayScore = async (display) => {
    const response = await this.getApiAccess().getScoresFromApi();
    const list = await response.json();
    if (response.ok) {
      const sortedList = this.myListFunctions().mySort(list.result);
      display.setScoresOnBoard(sortedList);
      actions.onRefreshSuccess.doActions({});
    }
  }

  getApiAccess = () => new ApiAccess();

  myListFunctions = () => new MyList();
}
