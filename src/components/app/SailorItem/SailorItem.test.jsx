import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SailorItem from './SailorItem';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());

  it('renders single character', () => {
    const { asFragment } = render(<SailorItem
      sailorName='Sailor Michelle'
      imageUrl='url@url.com'
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
