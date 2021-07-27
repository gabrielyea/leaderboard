import leaderboardInterface from './leaderboard-interface';
import ApiAccess from '../api/api-access';

export default class LeaderboardUtils {
  setScore = ({ user, score }) => {
    this.getApiAccess().postScoreToApi({ user, score }).then((score) => this.success(score));
  }

  getScore = () => {
    this.getApiAccess().getScoresFromApi()
      .then((list) => leaderboardInterface.setLeaderboardDisplay(list.result));
  }

  getApiAccess = () => new ApiAccess();

  success = (res) => {
    console.log('should refresh the leaderboard with', res.result);
  }
}