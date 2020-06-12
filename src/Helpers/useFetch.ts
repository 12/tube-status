import { useState, useEffect } from 'react';

const useFetch = (url: string, options: object = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };

    data();
  }, []);

  return { response, error };
};

export default useFetch;
