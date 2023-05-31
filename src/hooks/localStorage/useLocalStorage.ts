const useLocalStorage = () => {
  const setToken = (key: string, token: string) => {
    localStorage.setItem(key, token);
  };

  return { setToken };
};

export default useLocalStorage;
