import axios, { AxiosInstance } from 'axios';

//axios 인스턴스 생성
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  } 
})

export const updateAxiosClient = (): AxiosInstance => axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
      accept: 'multipart/form-data',
      // Authorization: `bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

export const tokenAxiosClient = (): AxiosInstance => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    timeout: 5000,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });
};

export const updateStoreAxiosClient = (): AxiosInstance => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    timeout: 5000,
    headers: {
      accept: 'multipart/form-data',
      Authorization: token ? `Bearer ${token}` : "",
      'Content-Type': 'multipart/form-data',
    },
  });
};