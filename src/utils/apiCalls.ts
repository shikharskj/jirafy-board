import axios from "axios";

const multiPartApi = <T>(url: string, options: object): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      ...options,
    })
      .then((res) => {
        resolve(res.data as T);
      })
      .catch((err) => {
        // handleErrorCode(err);
        reject(err);
      });
  });
};

export const getApi = <T>(url: string, params = {}) => {
  return multiPartApi<T>(url, { method: "GET", params });
};
