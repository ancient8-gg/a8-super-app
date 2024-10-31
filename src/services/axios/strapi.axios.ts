import axios from 'axios'

import { getLocalStorageItem } from '@/utils'

import { apiConfig } from '@/configs'

import { LOCAL_STORAGE_KEY } from '@/constants'

const token = getLocalStorageItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)

const axiosConfig = {
  headers: {
    Authorization: !token ? '' : `Bearer ${token}`,
  },
  timeout: 30000,
  baseURL: apiConfig.strapiApi,
  paramsSerializer: {
    indexes: null,
  },
}

export const strapiAxios = axios.create(axiosConfig)
