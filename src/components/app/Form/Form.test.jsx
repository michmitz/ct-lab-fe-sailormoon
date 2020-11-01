import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  afterEach(() => cleanup());

  it('renders Form', () => {
    const { asFragment } = render(<Form
      sailorName="Sailor Mars"
      realName="Michelle Stermitz"
      description="Coolest Sailor Moon character"
      attack="Dry Sense of Humor"
      zodiacSign="Aries"
      imgUrl="https://michellesite/michelle.png"
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
