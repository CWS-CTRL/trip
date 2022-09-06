import axios from "axios";

import { baseURL, timeout } from "./config";

class RTS {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(
        (res) => resolve(res.data),
        (err) => reject(err)
      );
    });
  }

  get(config) {
    return this.request({ ...config, methods: "GET" });
  }

  post(config) {
    return this.request({ ...config, methods: "POST" });
  }
}

export default new RTS(baseURL, timeout);
