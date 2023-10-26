import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {
    return axios.get("/data/search.json");
  }

  async search(keyword) {
    return axios.get("/data/search.json");
  }

  async videos(keyword) {
    return axios.get("/data/trend.json");
  }
}
