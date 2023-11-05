export default class Eland {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search() {
    return this.#mostTrend();
  }

  async #mostTrend() {
    console.log("mostTrend");
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then(res => res.data.items);
  }
}
