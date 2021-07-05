import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.fastmock.site/mock/e696e555bd67c1782c61de73f89e86ac/api",
  headers: {
    "Content-Type": "application/json",
  },
});

interface baseResponse {
  data: any;
  message: string | null;
  retCode: number;
}

export const get = (url: string, params?: any): Promise<baseResponse> => {
  return new Promise((resolve, reject) => {
    return instance
      .get(url, { params })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const post = (url: string, data?: any): Promise<baseResponse> => {
  return new Promise((resolve, reject) => {
    return instance
      .post(url, data)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
