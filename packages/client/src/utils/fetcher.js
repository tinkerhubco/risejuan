const fetcherFn = (baseURL) => (path) => {
  const url = [baseURL, path].join('');
  return fetch(url).then((r) => r.json());
};

export const fetcher = fetcherFn(
  process.env.REACT_API_BASE_URL || 'http://localhost:8000',
);
