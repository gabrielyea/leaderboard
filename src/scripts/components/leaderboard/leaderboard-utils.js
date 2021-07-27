import leaderboardInterface from './leaderboard-interface.js';
import ApiAccess from '../api/api-access.js';
import MyList from '../utils/list-utils.js';

export default class LeaderboardUtils {
  setScore = ({ user, score }) => {
    this.getApiAccess().postScoreToApi({ user, score }).then((score) => {
      this.onSuccessSubmit({ score });
    });
  }

  getScore = () => {
    this.getApiAccess().getScoresFromApi()
      .then((list) => {
        const sortedList = this.myListFunctions().mySort(list.result);
        leaderboardInterface.setLeaderboardDisplay(sortedList);
      });
  }

  getApiAccess = () => new ApiAccess();

  myListFunctions = () => new MyList();

  onSuccessSubmit = () => {
    leaderboardInterface.toggleDisabled('Submit your score');
    this.getScore();
  }
}
