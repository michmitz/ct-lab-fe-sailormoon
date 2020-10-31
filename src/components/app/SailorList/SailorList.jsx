import React from 'react';
import PropTypes from 'prop-types';
import { useSailors } from '../../../hooks/useSailors';
import SailorItem from '../SailorItem/SailorItem';

const SailorList = () => {
  const { loading, sailors } = useSailors();
  if(loading) return <h1>Loading...</h1>;

  const sailorElements = sailors.map(sailor => (
    <li key={sailor.id}>
      <SailorItem {...sailor} />
    </li>
  ));

  return (
    <ul data-testid="sailor-list">
      {sailorElements}
    </ul>
  )
};

SailorList.propTypes = {
};

export default SailorList;
