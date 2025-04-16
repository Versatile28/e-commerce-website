import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../layouts/Footer';

describe('Footer Component', () => {
  test('renders footer contact section and legal info', () => {
    render(<Footer />);

    expect(screen.getByText(/Be in touch/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\. At itaque temporibus\./i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email Address/i)).toBeInTheDocument();

    expect(screen.getByText(/© 2025 Your company\. All rights reserved\./i)).toBeInTheDocument();

    ['Terms & Conditions', 'Privacy & cookies', 'Accessibility', 'Customer Data Promise'].forEach((text) => {
      expect(screen.getByText(new RegExp(text, "i"))).toBeInTheDocument();
    });
  });

  test('renders accordion headings on small screens', () => {
    render(<Footer />);
    const accordionRegion = screen.getByTestId('small-screen-accordion');

    expect(within(accordionRegion).getByRole('button', { name: /^Shop$/i })).toBeInTheDocument();
    expect(within(accordionRegion).getByRole('button', { name: /^Company$/i })).toBeInTheDocument();
    expect(within(accordionRegion).getByRole('button', { name: /^Your Account$/i })).toBeInTheDocument();
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
    expect(within(accordionRegion).getAllByText(/Our Products/i).length).toBeGreaterThanOrEqual(1);
    const accountButton = within(accordionRegion).getByRole('button', { name: /^Your Account$/i });
    await user.click(accountButton);
    expect(within(accordionRegion).getAllByText(/Wishlist/i).length).toBeGreaterThanOrEqual(1);
  });

  test('renders standard large screen layout content', () => {
    render(<Footer />);
    const lists = screen.getAllByRole('list', { hidden: false });
    const shopList = lists.find((list) => within(list).queryByText(/For Women/i));
    expect(shopList).toBeInTheDocument();
    
    const companyList = lists.find((list) => within(list).queryByText(/Login/i));
    expect(companyList).toBeInTheDocument();
  });
});
