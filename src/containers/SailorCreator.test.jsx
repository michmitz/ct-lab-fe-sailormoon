import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SailorCreator from './SailorCreator';
import { createSailor } from '../services/sailorMoon-api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/sailorMoon-api');

describe('SailorCreator container', () => {
  it('returns a response and stores in history', async() => {
    createSailor.mockResolvedValue([
      { 'response': 'json' }
    ]); 

    render(<MemoryRouter>
    <SailorCreator />
    </MemoryRouter>);

    const button = screen.getByTestId('form-button');

    await fireEvent.click(button)

    const successDisplay = await screen.findByTestId('success-display') 

    expect(successDisplay).toHaveTextContent('success!');
  });
});