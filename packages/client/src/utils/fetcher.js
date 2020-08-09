const fetcherFn = (baseURL) => (path, config = {}) => {
  const url = [baseURL, path].join('');
  return fetch(url, config).then((r) => r.json());
};

export const fetcher = fetcherFn(
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
);
