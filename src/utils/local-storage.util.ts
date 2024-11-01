export const getLocalStorageItem = (key: string) => {
  if (typeof localStorage === 'undefined') {
    return
  }

  return localStorage.getItem(key)
}

export const setLocalStorageItem = (key: string, value: any) => {
  if (typeof localStorage === 'undefined') {
    return
  }

  localStorage.setItem(key, value)
}
