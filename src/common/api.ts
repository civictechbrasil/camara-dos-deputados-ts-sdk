import axios, { AxiosRequestConfig, Method } from 'axios';
import { ClassConstructor, instanceToPlain, plainToInstance } from 'class-transformer';
import { stringify } from 'qs';

import { DEPUTIES_CHAMBER_BASE_URL } from './constants';

export interface APIResultLinks {
  rel: string;
  href: string;
  type: string;
}

export interface APIResult<Model> {
  dados: Model | Model[];
  links?: APIResultLinks[];
}

export class APIError extends Error {
  error: string;

  statusCode: number;

  constructor({ message, statusCode, error }: { message: string | string[]; error: string; statusCode: number }) {
    super(Array.isArray(message) ? message.join('\n') : message);
    this.statusCode = statusCode;
    this.error = error;
    this.name = APIError.name;
  }
}

type RequestConfig = AxiosRequestConfig & {
  method: Method;
};

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || DEPUTIES_CHAMBER_BASE_URL,
  responseType: 'json',
  paramsSerializer: {
    serialize: (params) =>
      stringify(instanceToPlain(params), {
        encode: false,
        arrayFormat: 'indices',
        skipNulls: true,
        strictNullHandling: true,
      }),
  },
});

export const request = async <T>(config: RequestConfig, Model?: ClassConstructor<any>): Promise<APIResult<T>> => {
  const response = await axiosInstance.request<APIResult<T>>(config);
  const { dados: rawDados, links } = response.data;

  const dados = Model ? plainToInstance(Model, rawDados) : rawDados;

  return {
    dados: dados as T,
    links,
  };
};

export const apiRoutes = {
  deputies: '/deputados',
} as const;
