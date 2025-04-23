import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarMenu from '../components/NavbarMenu';

jest.mock('../components/Home', () => ({ menu, toggleDropdown, activeDropdown, closingDropdown }) => (
  <div
    data-testid="Home"
    onClick={() => toggleDropdown('Home')}
  >
    {`Home active:${activeDropdown} closing:${closingDropdown}`}
  </div>
));
jest.mock('../components/Shop', () => ({ menu, toggleDropdown, activeDropdown, closingDropdown }) => (
  <div
    data-testid="Shop"
    onClick={() => toggleDropdown('Shop')}
  >
    {`Shop active:${activeDropdown} closing:${closingDropdown}`}
  </div>
));
jest.mock('../components/ProductCards', () => ({ menu, toggleDropdown, activeDropdown, closingDropdown }) => (
  <div data-testid="ProductCards">ProductCards</div>
));
jest.mock('../components/Icons', () => ({ menu, toggleDropdown, activeDropdown, closingDropdown }) => (
  <div data-testid="Icons">Icons</div>
));
jest.mock('../components/Pages', () => ({ menu, toggleDropdown, activeDropdown, closingDropdown }) => (
  <div data-testid="Pages">Pages</div>
));
jest.mock('../components/Docs', () => ({ menu, toggleDropdown, activeDropdown, closingDropdown }) => (
  <div data-testid="Docs">Docs</div>
));

describe('NavbarMenu Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('renders all child components and search form', () => {
    render(<NavbarMenu menu={[]} />);

    expect(screen.getByTestId('Home')).toBeInTheDocument();
    expect(screen.getByTestId('Shop')).toBeInTheDocument();
    expect(screen.getByTestId('ProductCards')).toBeInTheDocument();
    expect(screen.getByTestId('Icons')).toBeInTheDocument();
    expect(screen.getByTestId('Pages')).toBeInTheDocument();
    expect(screen.getByTestId('Docs')).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('activates a dropdown when clicked and displays active state', () => {
    render(<NavbarMenu menu={[]} />);
    const home = screen.getByTestId('Home');

    expect(home).toHaveTextContent('Home active:null closing:null');

    fireEvent.click(home);
    expect(home).toHaveTextContent('Home active:Home closing:null');
  });

  it('closes dropdown with animation and resets state after timeout', () => {
    render(<NavbarMenu menu={[]} />);
    const shop = screen.getByTestId('Shop');

    fireEvent.click(shop);
    expect(shop).toHaveTextContent('Shop active:Shop closing:null');

    fireEvent.click(shop);
    expect(shop).toHaveTextContent('Shop active:Shop closing:Shop');

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(shop).toHaveTextContent('Shop active:null closing:null');
  });

  it('handles switching from one dropdown to another immediately', () => {
    render(<NavbarMenu menu={[]} />);
    const home = screen.getByTestId('Home');
    const shop = screen.getByTestId('Shop');

    fireEvent.click(home);
    expect(home).toHaveTextContent('Home active:Home closing:null');

    fireEvent.click(shop);

    expect(home).toHaveTextContent('Home active:Shop closing:null');
    expect(shop).toHaveTextContent('Shop active:Shop closing:null');
  });
});
