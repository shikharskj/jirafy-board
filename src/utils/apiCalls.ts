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

export const postApi = <T>(url: string, data = {}, params = {}) => {
  return multiPartApi<T>(url, { method: "POST", data, params });
};

export const patchApi = <T>(url: string, data = {}, params = {}) => {
  return multiPartApi<T>(url, { method: "PUT", data, params });
};


export const deleteApi = <T>(url: string, params = {}) => {
  return multiPartApi<T>(url, { method: "DELETE", params });
};
