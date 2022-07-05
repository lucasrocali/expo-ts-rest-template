import axios from 'axios';

export interface PaginatedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T[];
}

export const API_URL = 'https://rickandmortyapi.com/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
