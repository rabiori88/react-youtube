import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {
    return axios.get("/data/keyword.json");
  }

  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/data/related.json")
      : axios.get("/data/keyword.json");
  }

  async videos(keyword) {
    return axios.get("/data/trend.json");
  }

  async channels() {
    return axios.get("/data/channel.json");
  }
}
