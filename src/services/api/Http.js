const defaultConfig = {
  baseUrl: 'http://localhost:5001'
}

export class Http {
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || defaultConfig.baseUrl;
  }

  get(url, config = {}) {
    return fetch(this.baseUrl + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      ...config
    }).then(response => response.json())
  }
}

export default new Http();
