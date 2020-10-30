import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ sailorName, imageUrl }) => {
  return <figure>
    <img src={imageUrl} alt={sailorName} />
    <figcaption>{sailorName}</figcaption>
  </figure>
}

CharacterItem.propTypes = {
  sailorName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CharacterItem
