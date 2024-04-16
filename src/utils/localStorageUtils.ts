
export const getLocalStorageItem = (key: string): string | null => {
    return localStorage.getItem(key);
};
  
export const setLocalStorageItem = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};
  
export const removeLocalStorageItem = (key: string): void => {
    localStorage.removeItem(key);
};
  