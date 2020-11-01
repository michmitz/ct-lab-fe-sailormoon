import React from 'react';
import { useParams } from 'react-router-dom';
import { useSailorById } from '../../../hooks/useSailors'

const SailorDetail = () => {
  const { id } = useParams();
  const { loading, sailor } = useSailorById(id);
  if(loading) return <h1>Loading...</h1>;

  return (
    <div key="detail-display" data-testid="detail-display" className="detail-display">
      <h2>Sailor {sailor.sailorName}</h2>
      <figure>{sailor.imageUrl} alt={sailor.sailorName}</figure>
      <p>a.k.a. "{sailor.realName}"</p>
      <p>Description: {sailor.description}</p>
      <p>Attack: {sailor.attack}</p>
      <p>Zodiac Sign: {sailor.zodiacSign}</p>
    </div>
  )
};

export default SailorDetail;

