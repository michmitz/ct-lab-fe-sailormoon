import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  afterEach(() => cleanup());

  it('renders Form', () => {
    const { asFragment } = render(<Form
      sailorName="Sailor Neptune"
      realName="Michiru Kaiou"
      description="Michiru is exactly what a fairy tale princess would be like."
      attack="Deep Submerge"
      zodiacSign="Pisces"
      imgUrl="https://michirusite/michiru.png"
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
