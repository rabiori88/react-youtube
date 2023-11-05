import axios from "axios";

export default class ElandClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async test(params) {
    return this.httpClient.get("search", params);
  }
}
