import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderBar from '../layouts/HeaderBar';

describe('HeaderBar Component', () => {
  test('renders HeaderBar with main sections', () => {
    render(<HeaderBar />);

    expect(screen.getByText(/Free in-store delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/020-800-456-747/i)).toBeInTheDocument();
    expect(screen.getByText(/English/i)).toBeInTheDocument();
    expect(screen.getByText(/USD/i)).toBeInTheDocument();
  });

  test('displays dropdown items when language dropdown is clicked', async () => {
    render(<HeaderBar />);
    const languageDropdown = screen.getByText(/English/i);
    userEvent.click(languageDropdown);
    
    expect(await screen.findByText(/German/i)).toBeInTheDocument();
    expect(await screen.findByText(/French/i)).toBeInTheDocument();
  });

  test('displays dropdown items when currency dropdown is clicked', async () => {
    render(<HeaderBar />);
    const currencyDropdown = screen.getByText(/USD/i);
    userEvent.click(currencyDropdown);
    
    expect(await screen.findByText(/EUR/i)).toBeInTheDocument();
    expect(await screen.findByText(/GBP/i)).toBeInTheDocument();
  });
});
