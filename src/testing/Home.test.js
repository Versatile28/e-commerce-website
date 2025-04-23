import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('Home component', () => {
  const sampleMenu = [
    {
      name: 'Home',
      subcategories: [
        {
          subcategorylist: [
            { name: 'Dashboard', link: '/dashboard' },
            { name: 'Profile', link: '/profile' },
            { name: 'Settings', link: '/settings' },
            { name: 'Analytics', link: '/analytics' },
          ],
        },
      ],
    },
  ];

  let toggleDropdownMock;

  beforeEach(() => {
    toggleDropdownMock = jest.fn();
  });

  test('renders menu button with correct label and expand icon', () => {
    render(
      <Home
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown={null}
      />
    );

    const button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Home');

    const icon = screen.getByTestId('expand-icon');
    expect(icon).toBeInTheDocument();
  });

  test('calls toggleDropdown with "home" on header click', () => {
    render(
      <Home
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown={null}
      />
    );

    const header = screen.getByTestId('header-area');
    fireEvent.click(header);
    expect(toggleDropdownMock).toHaveBeenCalledTimes(1);
    expect(toggleDropdownMock).toHaveBeenCalledWith('home');
  });

  test('dropdown is visible when activeDropdown matches', () => {
    render(
      <Home
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown="home"
        closingDropdown={null}
      />
    );

    const dropdown = screen.getByTestId('dropdown-home');
    expect(dropdown).toHaveClass('show');
    expect(dropdown).not.toHaveClass('hide');

    sampleMenu[0].subcategories[0].subcategorylist.forEach(item => {
      const link = screen.getByRole('link', { name: new RegExp(`^${item.name}`) });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.link);
    });
  });

  test('dropdown has hide class when closingDropdown matches', () => {
    render(
      <Home
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown="home"
      />
    );

    const dropdown = screen.getByTestId('dropdown-home');
    expect(dropdown).toHaveClass('hide');
    expect(dropdown).not.toHaveClass('show');
  });

  test('"New" badge appears on last two items', () => {
    render(
      <Home
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown="home"
        closingDropdown={null}
      />
    );

    const settingsLink = screen.getByRole('link', { name: /Settings/ });
    const analyticsLink = screen.getByRole('link', { name: /Analytics/ });

    expect(within(settingsLink).getByText('New')).toBeInTheDocument();
    expect(within(analyticsLink).getByText('New')).toBeInTheDocument();
  });
});
