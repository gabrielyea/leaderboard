const API_POST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

let API_SCORES = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aRDSHWQhzYUkBvp4lq7I/scores/';

const setRoute = (newDir) => {
  API_SCORES = newDir;
};

const getScoreDirection = () => API_SCORES;

export { API_POST, setRoute, getScoreDirection };