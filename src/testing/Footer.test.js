import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../layouts/Footer';

describe('Footer Component', () => {
  test('renders footer contact section', () => {
    render(<Footer />);

    expect(screen.getByText(/Be in touch/i)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email Address/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2025 Your company/i)).toBeInTheDocument();
  });

  test('renders accordion headings on small screens', () => {
    render(<Footer />);
    const accordionRegion = screen.getByTestId('small-screen-accordion');

    const shopHeading = within(accordionRegion).getByRole('button', { name: /^Shop$/i });
    const companyHeading = within(accordionRegion).getByRole('button', { name: /^Company$/i });
    const accountHeading = within(accordionRegion).getByRole('button', { name: /^Your Account$/i });

    expect(shopHeading).toBeInTheDocument();
    expect(companyHeading).toBeInTheDocument();
    expect(accountHeading).toBeInTheDocument();
  });

  test('accordion expands and reveals content when clicked', async () => {
    render(<Footer />);
    const accordionRegion = screen.getByTestId('small-screen-accordion');

    const user = userEvent.setup();

    const shopButton = within(accordionRegion).getByRole('button', { name: /^Shop$/i });
    await user.click(shopButton);
    expect(within(accordionRegion).getByText(/For Women/i)).toBeInTheDocument();

    const companyButton = within(accordionRegion).getByRole('button', { name: /^Company$/i });
    await user.click(companyButton);
    const companySection = screen.getAllByText(/Our Products/i);
    expect(companySection[0]).toBeInTheDocument();

    const accountButton = within(accordionRegion).getByRole('button', { name: /^Your Account$/i });
    await user.click(accountButton);
    const wishlistItems = within(accordionRegion).getAllByText(/Wishlist/i);
    expect(wishlistItems.length).toBeGreaterThanOrEqual(1);
  });
});
