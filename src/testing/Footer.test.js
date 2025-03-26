import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../layouts/Footer';

describe('Footer Component', () => {
  test('renders main footer sections', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Be in touch/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\. At itaque temporibus\./i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email Address/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2025 Your company\. All rights reserved\./i)).toBeInTheDocument();
  });

  test('renders accordion items on small screens', async () => {
    render(<Footer />);

    const shopButton = screen.getByRole('button', { name: /^Shop$/i });
    const companyButton = screen.getByRole('button', { name: /^Company$/i });
    const accountButton = screen.getByRole('button', { name: /^Your Account$/i });
    
    expect(shopButton).toBeInTheDocument();
    expect(companyButton).toBeInTheDocument();
    expect(accountButton).toBeInTheDocument();

    const smallScreenAccordion = screen.getByTestId('small-screen-accordion');
    userEvent.click(shopButton);

    const scopedWithin = within(smallScreenAccordion);
    expect(await scopedWithin.findByText(/For Women/i)).toBeInTheDocument();
  });
});
