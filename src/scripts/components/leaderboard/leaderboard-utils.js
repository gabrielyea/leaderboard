import MyList from '../utils/list-utils.js';
import actions from './leaderboard-actions.js';

export default class LeaderboardUtils {
  setScores = async ({ user, score, api }) => {
    actions.onScoreSubmited.doActions({});
    const test = await api.postCommentToApi({ comment: user });
    console.log(test);
    const response = await api.postScoreToApi({ user, score });
    if (response.ok) {
      actions.onScoreSucces.doActions({});
    }
  }

  displayScore = async ({ display, api }) => {
    const response = await this.getScores(api);
    const list = await response.json();
    if (response.ok) {
      const sortedList = this.myListFunctions().mySort(list.result);
      display.setScoresOnBoard(sortedList);
      actions.onRefreshSuccess.doActions({});
    }
  }

  displayUnicorns = async ({ display, api }) => {
    const response = await this.getScores(api);
    const list = await response.json();
    if (response.ok) {
      display.setUnicornsOnBoard(list);
      actions.onRefreshSuccess.doActions({});
    }
  }

  getScores = async (api) => {
    const response = await api.getScoresFromApi();
    return response;
  }

  myListFunctions = () => new MyList();
}
