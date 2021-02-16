import { MAX_DATA_FETCH, MIN_DATA_FETCH } from '../utils/constants';

class Api {
  constructor({ minFetch, maxFetch }) {
    this._minFetch = minFetch
    this._maxFetch = maxFetch
  }

  _initialRequest = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMinData = () => {
    return fetch(this._minFetch, {method: 'GET'})
      .then(res => this._initialRequest(res))
  }

  getMaxData = () => {
    return fetch(this._maxFetch, {method: 'GET'})
      .then(res => this._initialRequest(res))
  }
}

const api = new Api({
  minFetch: MIN_DATA_FETCH,
  maxFetch: MAX_DATA_FETCH
})

export default api;
