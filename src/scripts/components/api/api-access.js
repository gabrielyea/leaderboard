import { API_POST, setRoute, getScoreDirection } from './api-routes.js';

export default class ApiAccess {
  postGameToApi = async () => {
    const response = await fetch(API_POST, {
      method: 'POST',
      body: JSON.stringify({
        name: 'gabriels game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }

  postScoreToApi = async ({ user, score }) => {
    const response = await fetch(getScoreDirection(), {
      method: 'POST',
      body: JSON.stringify({
        user,
        score: parseInt(score, 10),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }

  getScoresFromApi = async () => {
    const response = await fetch(getScoreDirection());
    return response.json();
  }

  setNewDirection = (id) => {
    setRoute(`${API_POST}/${id}/scores/`);
  }
}
