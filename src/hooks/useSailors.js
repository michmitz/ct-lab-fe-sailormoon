import { useState, useEffect } from 'react';
import { getSailors } from '../services/sailorMoon-api';

export const useSailors = () => {
  const [loading, setLoading] = useState(true);
  const [sailors, setSailors] = useState([]);

  useEffect(() => {
    getSailors()
      .then(fetchedSailors => setSailors(fetchedSailors))
      .finally(() => setLoading(false));
  }, [])

  return {
    loading,
    sailors
  };
};