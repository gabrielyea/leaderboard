const API_POST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

let API_SCORES = '';

const setNewDirection = (newDir) => {
  API_SCORES = newDir;
};

const getScoreDirection = () => API_SCORES;

export { API_POST, setNewDirection, getScoreDirection };