import axios from 'axios'

import { apiConfig } from '@/configs'

const axiosConfig = {
  timeout: 30000,
  baseURL: apiConfig.statisticApi,
  paramsSerializer: {
    indexes: null,
  },
}

export const statisticAxios = axios.create(axiosConfig)
