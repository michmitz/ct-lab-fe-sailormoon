import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SailorDetail from './SailorDetail'; 
import { getSailorById } from '../../../services/sailorMoon-api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../../services/sailorMoon-api');

describe('SailorDetail component', () => {
  it('displays a sailor after loading', () => {
    getSailorById.mockResolvedValue({
      id: 1,
      sailorName: 'Deimos',
      realName: 'Michelle S.',
      description: 'The latest addition to the Sailor Scouts.',
      attack: 'Bad Jokes',
      zodiacSign: 'Aries', 
      imageUrl: 'michelle.png'
    });

    render(<MemoryRouter initialEntries={['/sailor/1']}>
    <Route path="/sailor/:id" component={SailorDetail}/>
  </MemoryRouter>);

    screen.getByText('Loading...');  

    return waitFor(() => {
      screen.getByText('Sailor Deimos');
      screen.getByText('a.k.a. "Michelle S."');
      screen.getByText('Description: The latest addition to the Sailor Scouts.');
      screen.getByText('Attack: Bad Jokes'); 
      screen.getByText('Zodiac Sign: Aries'); 
      screen.getByText('michelle.png alt=Deimos')
    });
  });
});