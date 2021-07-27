import ApiAccess from "../api/api-access";

export default class LeaderboardUtils {
  setScore = ({ user, score }) => {
    this.getApiAccess().postScoreToApi({ user, score }).then((score) => this.success(score));
  }

  getScore = () => {
    this.getApiAccess().getScoresFromApi().then((list) => this.success(list));
  }

  getApiAccess = () => {
    return new ApiAccess();
  }

  success = (res) => {
    console.log('should refresh the leaderboard with', res.result);
  }
}