export default class ApiAccess {
  API_POST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  API_SCORES = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iBsrKgm7fJZAW7fOqiIR/scores/';

  postGameToApi = async () => {
    const response = await fetch(this.API_POST, {
      method: 'POST',
      body: JSON.stringify({
        name: 'helo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }

  postScoreToApi = async ({ user, score }) => {
    const response = await fetch(this.API_SCORES, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }

  getScoresFromApi = async () => {
    const response = await fetch(this.API_SCORES);
    return response.json();
  }
}
