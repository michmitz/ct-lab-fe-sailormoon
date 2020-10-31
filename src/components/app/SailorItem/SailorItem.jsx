import React from 'react';
import PropTypes from 'prop-types';

const SailorItem = ({ sailorName, imageUrl }) => {
  return <figure>
    <img src={imageUrl} alt={sailorName} />
    <figcaption>{sailorName}</figcaption>
  </figure>
} 

SailorItem.propTypes = {
  sailorName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default SailorItem
