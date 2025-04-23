import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyNavbar from '../layouts/MyNavbar';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../components/Cart', () => props => (
  <div data-testid="cart-panel">{props.showCart ? 'open' : 'closed'}</div>
));
jest.mock('../components/NavbarMenu', () => () => <div data-testid="navbar-menu" />);
jest.mock('../components/NavMenuOff', () => () => <div data-testid="nav-menu-off" />);

function renderComponent(width = 1024) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
  return render(
    <MemoryRouter>
      <MyNavbar menu={[]} />
    </MemoryRouter>
  );
}

describe('MyNavbar component', () => {
  test('renders the navbar container and brand', () => {
    renderComponent();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getAllByTestId('brand')[0]).toHaveTextContent('Varkala');
  });

  test('renders user, wishlist and cart icons', () => {
    renderComponent();
    expect(screen.getAllByTestId('cart-icon').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('wishlist-icon').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('user-icon').length).toBeGreaterThan(0);
  });

  test('cart panel opens and closes', () => {
    renderComponent();
    expect(screen.getAllByTestId('cart-panel')[0]).toHaveTextContent('closed');
    const svg = screen.getAllByTestId('user-icon')[0].querySelector('svg');
    if (!svg) throw new Error('SVG icon not found');
    fireEvent.click(svg);
    expect(screen.getAllByTestId('cart-panel')[0]).toHaveTextContent('open');
  });

  test('main menu toggle and extra toggle are rendered', () => {
    renderComponent();
    expect(screen.getByTestId('main-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('extra-toggle')).toBeInTheDocument();
  });

  test('navbar-menu and nav-menu-off on desktop', () => {
    renderComponent(1024);
    expect(screen.getByTestId('navbar-menu')).toBeInTheDocument();
    expect(screen.getAllByTestId('nav-menu-off').length).toBeGreaterThan(0);
  });

  test('navbar-menu and nav-menu-off on mobile', () => {
    renderComponent(500);
    expect(screen.getByTestId('navbar-menu')).toBeInTheDocument();
    expect(screen.getByTestId('nav-menu-off')).toBeInTheDocument();
  });
});
