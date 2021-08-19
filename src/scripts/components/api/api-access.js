import { API_POST, setRoute, getScoreDirection } from './api-routes.js';

const GET = 'https://crudcrud.com/api/dad647c5464747bb89c0d77f55f147df/unicorns';
const CREATE = 'https://crudcrud.com/api/dad647c5464747bb89c0d77f55f147df/test';
const CREATECOMMENT = 'https://crudcrud.com/api/dad647c5464747bb89c0d77f55f147df/test/comment';

export default class ApiAccess {
  postGameToApi = async () => {
    const response = await fetch(CREATE, {
      method: 'POST',
      body: JSON.stringify({
        name: 'gabriels test',
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
    return response;
  }

  getScoresFromApi = async () => {
    const response = await fetch(GET);
    return response;
  }

  postCommentToApi = async ({ comment }) => {
    const response = await fetch(CREATE, {
      method: 'POST',
      body: JSON.stringify({
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }

  testApi = async () => {
    const response = await fetch(GET);
    return response.json();
  }

  setNewDirection = (id) => {
    setRoute(`${API_POST}/${id}/scores/`);
  }
}
