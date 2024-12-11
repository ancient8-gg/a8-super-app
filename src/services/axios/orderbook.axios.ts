import axios from 'axios'

import { apiConfig } from '@/configs'

const axiosConfig = {
  timeout: 30000,
  baseURL: apiConfig.orderbookApi,
  paramsSerializer: {
    indexes: null,
  },
}

export const orderbookAxios = axios.create(axiosConfig)
