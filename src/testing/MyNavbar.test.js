import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyNavbar from '../layouts/MyNavbar';

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

jest.mock('../components/NavbarMenu', () => () => <div data-testid="navbar-menu">NavbarMenu</div>);
jest.mock('../components/Cart', () => () => <div data-testid="cart">Cart Component</div>);

describe('MyNavbar Component', () => {
  beforeEach(() => {
    global.innerWidth = 1024;
  });

  test('renders MyNavbar with brand and icons', () => {
    render(<MyNavbar />);

    const brandElements = screen.getAllByText(/Varkala/i);
    expect(brandElements.length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });

  test('toggles offcanvas when desktop offcanvas toggle button is clicked', async () => {
    render(<MyNavbar />);
    const offcanvasToggle = screen.getAllByRole('button').find((btn) =>
      btn.innerHTML.includes('M4 6h16M4 12h8m-8 6h16')
    );
    expect(offcanvasToggle).toBeDefined();
    userEvent.click(offcanvasToggle);
    await waitFor(() => {
      expect(screen.getAllByText('Varkala')[1]).toBeInTheDocument();
    });
  });

  test('toggles dropdown inside offcanvas', async () => {
    render(<MyNavbar />);
    const offcanvasToggle = screen.getAllByRole('button').find((btn) =>
      btn.innerHTML.includes('M4 6h16M4 12h8m-8 6h16')
    );
    expect(offcanvasToggle).toBeDefined();
    userEvent.click(offcanvasToggle);
    const dropdownLink = await screen.findByText(/Dropdown link/i);
    expect(dropdownLink).toBeInTheDocument();
    userEvent.click(dropdownLink);
    expect(await screen.findByText(/Action/i)).toBeInTheDocument();
  });

  test('renders NavbarMenu when width is less than or equal to 992', () => {
    global.innerWidth = 800;
    fireEvent(window, new Event('resize'));
    render(<MyNavbar />);
    expect(screen.getByTestId('navbar-menu')).toBeInTheDocument();
  });

  test('does not render NavbarMenu when width is greater than 992', () => {
    global.innerWidth = 1200;
    fireEvent(window, new Event('resize'));
    render(<MyNavbar />);
    expect(screen.queryByTestId('navbar-menu')).toBeNull();
  });
});
