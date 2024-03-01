import axios, { AxiosRequestConfig } from "axios";
const baseURL = "https://macomanage.onrender.com";

export interface FetchResponse<T> {
  data: T[];
}

const axiosAuthInstance = axios.create({
  baseURL: baseURL,
});

const axiosInstance = axios.create({
  baseURL: baseURL,
});

const injectToken = (token?: string) => {
  const accessToken = token ? token : localStorage.getItem("token");
  axiosInstance.interceptors.request.use((req) => {
    req.headers.Authorization = accessToken;
    return req;
  });
};

export default class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  login = (data: T) => {
    return axiosAuthInstance.post(this.endpoint, data).then((res) => {
      localStorage.setItem("token", `Bearer ${res.data.token}`);
      injectToken(res.data.token);
      return res;
    });
  };

  getRequest = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
      .catch((error) => {
        console.error("Get Request error:", error);
        throw error;
      });
  };

  postRequest = (data: T) => {
    return axiosInstance
      .post(this.endpoint, data)
      .then((res) => res.data)
      .catch((error) => {
        console.error("Post Request error:", error);
        throw error;
      });
  };
}
