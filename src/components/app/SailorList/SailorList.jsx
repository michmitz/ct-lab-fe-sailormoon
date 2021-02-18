import React from 'react';
import { Link } from 'react-router-dom';
import { useSailors } from '../../../hooks/useSailors';
import SailorItem from '../SailorItem/SailorItem';

const SailorList = () => {
  const { loading, sailors } = useSailors();
  if(loading) return <h1>Loading...</h1>;

  const sailorElements = sailors.map(sailor => (
    <li key={sailor.id}>
      <Link to={`/sailors/${sailor.id}`}>
        <SailorItem {...sailor} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="sailor-list">
      {sailorElements}
    </ul>
  )
};

export default SailorList;
