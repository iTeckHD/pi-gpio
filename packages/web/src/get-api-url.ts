export const getApiUrl = () => {
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:8081`;
};
