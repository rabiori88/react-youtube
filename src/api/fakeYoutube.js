import axios from "axios";

export default class FakeYoutube {
  constructor() {
    console.log("fakeYoutube");
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostTrend();
  }

  async #searchByKeyword() {
    console.log("searchByKeyword");
    return axios
      .get(`/data/keyword.json`)
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostTrend() {
    console.log("mostTrend");
    return axios.get(`/data/trend.json`).then(res => res.data.items);
  }
}