export const timeoutPromise = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const getStorage = key => {
  const item = localStorage.getItem(key) || null;
  return JSON.parse(item);
};

export const setStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value));
