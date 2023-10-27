export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostTrend();
  }

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCA8UWUW80iHqK9ymdjRwPg&maxResults=25&q=%ED%83%AC%ED%83%AC%EB%B2%84%EB%A6%B0&type=channel&key=[YOUR_API_KEY] HTTP/1.1

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          channelId: id,
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }
  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword(keyword) {
    console.log("searchByKeyword");
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
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
