export default class Service {
  constructor() {
    this._apiBase = "http://localhost:8888/portfolio/wordpress/wp-json/wp/v2";
  }
  getRes = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status : ${res.status}`);
    }
    return await res.json();
  };
  setPost = async () => {
    const res = await this.getRes("/media");
    return res;
  };
  getPosts = async () => {
    const res = await this.getRes("/posts");
    return res;
  };
}
