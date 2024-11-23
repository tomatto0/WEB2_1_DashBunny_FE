import axios, { AxiosInstance } from 'axios';

//axios 인스턴스 생성
export const api = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:3000/api",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  } 
})

export const updateAxiosClient = (): AxiosInstance => axios.create({
    baseURL: process.env.SERVER_URL || "http://localhost:3000/api",
    headers: {
      accept: 'multipart/form-data',
      // Authorization: `bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
