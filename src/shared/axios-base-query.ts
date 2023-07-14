import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosHeaderValue, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getCurrentSession } from './current-session';

interface RequestOptions extends AxiosRequestConfig {
  headers: Record<string, string | undefined>;
}

export const axiosBaseQuery = ({
  baseUrl,
  defaultHeaders,
}: {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
}): BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    headers?: AxiosRequestConfig['headers'];
    params?: AxiosRequestConfig['params'];
  },
  unknown,
  unknown> => 
async ({ url, method, data, params, headers }) => {
   console.log('headers',headers)
  const session = getCurrentSession();
  try {
    const requestOptions: RequestOptions = {
      url: baseUrl + url,
      method: method,
      data,
      params,
      headers: {
        ...defaultHeaders,
        ...headers,
      } as any,
    };

    if (session?.accessToken) {
      requestOptions.headers['Authorization'] = `Bearer ${session.accessToken.data.token}`;
    }

    const response = await axios(requestOptions);
    return { data: response.data };
  } catch (error) {
    const { response } = error as { response?: AxiosResponse };
    return {
      error: { status: response?.status, data: response?.data },
      data: undefined,
      meta: {},
    };
  }
};
