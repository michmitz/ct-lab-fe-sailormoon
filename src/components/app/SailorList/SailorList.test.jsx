import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SailorList from './SailorList';
import { getSailors } from '../../../services/sailorMoon-api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../services/sailorMoon-api.jsx');

describe('SailorList component', () => {
  it('displays a list of sailors', async() => {
    getSailors.mockResolvedValue([
      {  
        sailorName: 'Sailor Pluto',
        realName: 'Setsuna Meiou',
        description: 'The coolest character',
        attack: 'Dead Scream',
        zodiacSign: 'Scorpio',
        imageUrl: 'https://www.pngegg.com/en/png-kuyry'
      }
    ])
    
    render(<MemoryRouter>
        <SailorList />
      </MemoryRouter> 
    );

    screen.getByText('Loading...');

    const sailorList = await screen.findByTestId('sailor-list');

    return waitFor(() => {
      expect(sailorList).not.toBeEmptyDOMElement();
    });
  });
});
