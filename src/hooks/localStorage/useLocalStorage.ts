import { useCallback } from "react";

const useLocalStorage = () => {
  const setToken = (key: string, token: string) => {
    localStorage.setItem(key, token);
  };

  const getToken = useCallback((key: string): string | null => {
    return localStorage.getItem(key);
  }, []);

  const removeToken = (key: string) => {
    localStorage.removeItem(key);
  };

  return { setToken, getToken, removeToken };
};

export default useLocalStorage;
