import { useState, useEffect } from 'react';
import { getSailors, getSailorById } from '../services/sailorMoon-api';

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

export const useSailorById = (id) => {
  const [loading, setLoading] = useState(true);
  const [sailor, setSailor] = useState([]);

  useEffect(() => {
    getSailorById(id)
      .then(fetchedSailor => setSailor(fetchedSailor))
      .finally(() => setLoading(false));
  }, [id])

  return {
    loading,
    sailor
  };
};